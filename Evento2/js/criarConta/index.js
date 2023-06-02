window.addEventListener("load", (function() {
    acoesFormMinhaConta(),
    flatpickr('input[name="data-nascimento"]', {
        locale: flatpickrLocale[idioma],
        disableMobile: !0,
        altInput: "true",
        altFormat: formatoData,
        dateFormat: "Y-m-d",
        allowInput: "true",
        clickOpens: "false"
    }),
    document.querySelector('input[name="data-nascimento"]').nextElementSibling.dataset.mask = "##/##/####",
    Maska.create(document.querySelector('input[name="data-nascimento"]').nextElementSibling)
}
)),
acoesFormMinhaConta = function() {
    null !== document.querySelector("#bt-salvar-conta") && (document.querySelector("#bt-salvar-conta").addEventListener("click", (function(e) {
        params = getDadosFormMinhaConta("#form-criar-conta"),
        openLoad(),
        document.querySelector(".simples") ? (axios.post("/ajax/cadastro-simples/salvar", params).then((function(e) {
            Swal.fire({
                title: e.data.title,
                confirmButtonText: "Ok",
                html: e.data.message,
                customClass: {
                    popup: "w-auto",
                    header: "flex-row p-0",
                    content: "text-left p-0",
                    validationMessage: "",
                    actions: "justify-start",
                    confirmButton: "btn-primary m-0"
                }
            }).then((function(e) {
                e.data.chaveEticket ? window.location.href = domain + "/minha-conta/pedido/detalhes/rp/" + chaveEticket : e.data.codUsuarioSiteTicketeira ? (codUsuarioSiteTicketeira = e.data.codUsuarioSiteTicketeira,
                axios.post("/ajax/digitaliza-ingresso", {
                    cpfUsuario: params.cpf
                }).then((function(e) {}
                )),
                window.location = "/confirmar-conta/" + codUsuarioSiteTicketeira) : window.location = "/confirmar-conta/" + codUsuarioSiteTicketeira
            }
            ))
        }
        )).catch((function(e) {
            if (e.response.data.errors) {
                var t = Object.getOwnPropertyNames(e.response.data.errors);
                e.response.data.message = "",
                e.response.data.title = "Ops!",
                t.forEach((function(t) {
                    e.response.data.message += e.response.data.errors[t] + "<br>"
                }
                )),
                Swal.fire({
                    title: e.response.data.title,
                    confirmButtonText: "Ok",
                    html: e.response.data.message,
                    customClass: {
                        popup: "w-auto",
                        header: "flex-row p-0",
                        content: "text-left p-0 max-h-52 overflow-auto",
                        validationMessage: "",
                        actions: "justify-start",
                        confirmButton: "btn-primary m-0"
                    }
                }),
                closeLoad()
            }
        }
        )),
        event.preventDefault()) : (axios.post("/ajax/criar-conta/salvar", params).then((function(e) {
            Swal.fire({
                title: e.data.title,
                confirmButtonText: "Ok",
                html: e.data.message,
                customClass: {
                    popup: "w-auto",
                    header: "flex-row p-0",
                    content: "text-left p-0",
                    validationMessage: "",
                    actions: "justify-start",
                    confirmButton: "btn-primary m-0"
                }
            }).then((function() {
                codUsuarioSiteTicketeira = e.data.codUsuarioSiteTicketeira,
                window.location = "/confirmar-conta/" + codUsuarioSiteTicketeira
            }
            ))
        }
        )).catch((function(e) {
            if (e.response.data.errors) {
                var t = Object.getOwnPropertyNames(e.response.data.errors);
                e.response.data.message = "",
                e.response.data.title = "Ops!",
                t.forEach((function(t) {
                    e.response.data.message += e.response.data.errors[t] + "<br>"
                }
                )),
                Swal.fire({
                    title: e.response.data.title,
                    confirmButtonText: "Ok",
                    html: e.response.data.message,
                    customClass: {
                        popup: "w-auto",
                        header: "flex-row p-0",
                        content: "text-left p-0 max-h-52 overflow-auto",
                        validationMessage: "",
                        actions: "justify-start",
                        confirmButton: "btn-primary m-0"
                    }
                });
                var a = document.querySelector("#g-recaptcha").cloneNode();
                document.querySelector("#g-recaptcha").remove(),
                document.querySelector(".wrapper-btn-criar-conta").parentNode.insertBefore(a, document.querySelector(".wrapper-btn-criar-conta")),
                grecaptcha.enterprise.render("g-recaptcha", {
                    sitekey: document.querySelector("#g-recaptcha").dataset.sitekey
                }),
                closeLoad()
            }
        }
        )),
        event.preventDefault())
    }
    )),
    document.querySelector("#bt-cancelar-cadastro-conta").addEventListener("click", (function(e) {
        openLoad(),
        window.location = "/"
    }
    ))),
    null !== document.querySelector("#cp-nacionalidade") && document.querySelector("#cp-nacionalidade").addEventListener("change", (function(e) {
        "Brasil" == this.value ? (document.querySelectorAll(".cp-nacionalidade-not-brasil").forEach((function(e) {
            e.classList.add("hidden")
        }
        )),
        document.querySelectorAll(".cp-nacionalidade-brasil").forEach((function(e) {
            e.classList.remove("hidden")
        }
        ))) : (document.querySelectorAll(".cp-nacionalidade-not-brasil").forEach((function(e) {
            e.classList.remove("hidden")
        }
        )),
        document.querySelectorAll(".cp-nacionalidade-brasil").forEach((function(e) {
            e.classList.add("hidden")
        }
        )))
    }
    )),
    getDadosFormMinhaConta = function(e) {
        var t = new Object;
        return document.querySelectorAll(e + " input").forEach((function(e) {
            ["checkbox", "radio"].includes(e.type) ? t[e.name] = e.checked : t[e.name] = e.value
        }
        )),
        document.querySelectorAll(e + " select").forEach((function(e) {
            t[e.name] = e.value
        }
        )),
        t["g-recaptcha-response"] = document.querySelector(".g-recaptcha-response").value,
        t
    }
}
;
    