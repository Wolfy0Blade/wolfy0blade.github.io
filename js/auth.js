// MyVideo - Sistema de Login

const loginButton = document.getElementById("login");


if (loginButton) {

    loginButton.addEventListener("click", async () => {


        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;


        if (!email || !password) {

            alert("Preencha todos os campos!");

            return;

        }


        const { data, error } = await supabase.auth.signInWithPassword({

            email: email,

            password: password

        });


        if (error) {

            alert("Erro ao entrar: " + error.message);

            return;

        }


        alert("Login realizado com sucesso!");

        window.location.href = "index.html";


    });

          }
