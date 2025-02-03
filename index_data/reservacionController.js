(function () {
  var reservaciones = angular.module("reservaciones");

  reservaciones.controller("ReservacionesController", [
    "$http",
    "$scope",
    function ($http, $scope) {
      $scope.formVisibility = "0";
      $scope.rotulo = {};
      $scope.btnActive = false;
      $scope.contenedor = {};
      $scope.ninos = [];
      $scope.adultos = [];
      $scope.ninosConfirmados = [];
      $scope.adultosConfirmados = [];

      angular.element(document).ready(function () {});

      $scope.buscarNombre = function () {
        var nombre = removerAcentos($scope.data.Nombre);

        var data = { codigo: nombre, idUsuario: 6060 };

        $http.get("https://mwapi.azurewebsites.net/api/RotuloApi/ObtenerRotulo", { params: data }).then(
          function success(response) {
            if (response.data !== null) {
              if (response.data.Confirmado === false) {
                if (response.data.InvitadosRegistrados === true) {
                  $scope.rotulo = response.data;
                  $scope.formVisibility = "1";
                  $scope.adultos = $scope.rotulo.InvitadosVista.filter(function (item) {
                    return item.IdTipoInvitado === 1;
                  });
                  $scope.ninos = $scope.rotulo.InvitadosVista.filter(function (item) {
                    return item.IdTipoInvitado === 2;
                  });
                } else {
                  swal.fire({
                    text: "Por el momento no puedes confirmar tu asistencia. Espera a que tu anfitrión asigne invitados a este rótulo para continuar.",
                    type: "warning",
                    confirmButtonText: "OK",
                  });
                }
              } else {
                swal.fire({
                  title: "¡Lo sentimos!",
                  html: "Parece que ya confirmaste anteriormente por: <br/>" + response.data.AdultosConfirmados + " Adultos<br/>" + response.data.NinosConfirmados + " Niños",
                  type: "warning",
                  confirmButtonText: "OK",
                });
              }
            } else {
              swal.fire({
                title: "¡Lo sentimos!",
                text: "No se encontró ningún registro de ese nombre o código.",
                type: "error",
                confirmButtonText: "OK",
              });
            }
          },
          function error(response) {
            swal.fire({
              title: "Error",
              text: "Ha ocurrido un error",
              type: "error",
              confirmButtonText: "OK",
            });
            alert("El nombre que ingresaste no está registrado en la lista de invitados o ya se realizó la confirmación de asistencia.");
          }
        );
      };

      $scope.cambiar = function (val, dir) {
        debugger;
        if (dir === 'f') {
          if(val === 4 && $scope.ninos.length === 0) {
            val = 5;
          }
          if(val === 6 && $scope.ninos.length === 0) {
            val = 7;
          }
        }
        if (dir === 'b'){
          if(val === 4 && $scope.ninos.length === 0) {
            val = 3;
          }
          if(val === 6 && $scope.ninos.length === 0) {
            val = 5;
          }
        }
        $scope.formVisibility = val;

        if (val === 5) {
          $scope.ninosConfirmados = [];
          $scope.adultosConfirmados = [];

          $scope.ninosConfirmados = $scope.rotulo.InvitadosVista.filter(function (item) {
            return item.IdTipoInvitado === 2 && item.Confirmado === true;
          });
          $scope.adultosConfirmados = $scope.rotulo.InvitadosVista.filter(function (item) {
            return item.IdTipoInvitado === 1 && item.Confirmado === true;
          });
        }
      };

      $scope.changeActive = function (val) {
        switch (val) {
          case 0:
            if ($scope.data.Nombre != null) $scope.btnActive = true;
            else $scope.btnActive = false;
            break;
        }
      };

      $scope.confirmar = function () {
        $scope.contenedor.Invitados = $scope.rotulo.InvitadosVista;

        if ($scope.contenedor.Mensaje === null) {
          $scope.contenedor.Mensaje = "";
        }
        
        $scope.rotulo = {};
        $scope.cambiar(0);
        swal.fire({
          title: "¡Listo!",
          text: "Gracias por confirmar",
          type: "success",
          confirmButtonText: "OK",
        });

        /*$http.post("https://miwebdding.love/api/RotuloApi/ConfirmarRotulo", $scope.contenedor).then(
                function success(response) {
                    if (response.data === 1) {
                        $scope.rotulo = {};
                        $scope.cambiar(0);
                        swal.fire({
                            title: "¡Listo!",
                            text: "Gracias por confirmar",
                            type: "success",
                            confirmButtonText: "OK"
                        });
                    } else {
                        swal.fire({
                            title: "Error",
                            text: "Ha ocurrido un error",
                            type: "error",
                            confirmButtonText: "OK"
                        });
                    }
                },
                function error(response) {
                    swal.fire({
                        title: "Error",
                        text: "Ha ocurrido un error",
                        type: "error",
                        confirmButtonText: "OK"
                    });
                }
                );*/
      };

      $scope.alternarConfirmacion = function (invitado, valor) {
        if (valor === 1) {
          invitado.Confirmado = true;
        } else {
          invitado.Confirmado = false;
        }
      };

      function removerAcentos(input) {
        var tittles = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüû";
        var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuu";
        for (var i = 0; i < tittles.length; i++) input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();

        return input;
      }
    },
  ]);
})();
