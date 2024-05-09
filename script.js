document.addEventListener("DOMContentLoaded", function () {
    const createEmailButton = document.getElementById("createEmailButton");
    const copyEmailButton = document.getElementById("copyEmailButton");
    const copyCCButton = document.getElementById("copyCCButton");

    createEmailButton.addEventListener("click", createEmail);
    copyEmailButton.addEventListener("click", copyEmailToClipboard);
    copyCCButton.addEventListener("click", copyEmailsToCC);
});

function createEmail() {
    const professorName = document.getElementById("professorName").value;
    const classDate = document.getElementById("classDate").value;
    const className = document.getElementById("className").value;
    const subject = document.getElementById("subject").value;
    const shift = document.getElementById("shift").value;

    const absenceReasonElements = document.getElementsByName("absenceReason");
    let selectedAbsenceReason = "";

    for (const element of absenceReasonElements) {
        if (element.checked) {
            selectedAbsenceReason = element.value;
            break;
        }
    }

    const dateParts = classDate.split("-");
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

    const emailContent = `Ausência de Docente ${formattedDate}

Prezado(a) Aluno(a),

Informo que o(a) Professor(a) ${professorName} não comparecerá na aula do dia: ${formattedDate} Turma: ${className} Disciplina: ${subject} Turno: ${shift} por ${selectedAbsenceReason}.

* E-mail coletivo enviado aos alunos matriculados na turma.
Não há necessidade de resposta.`;

    document.getElementById("emailContent").value = emailContent;
}

function copyEmailToClipboard() {
    const emailContent = document.getElementById("emailContent");
    emailContent.select();
    document.execCommand("copy");
    alert("E-mail copiado para a área de transferência!");
}

function copyEmailsToCC() {
    const ccEmails = [
        "andre.salvaterra@unisuam.edu.br",
        "mcampos@unisuam.edu.br",
        "luciano.santos@unisuam.edu.br",
        "pedro.pereira@unisuam.edu.br",
        "inspetoria@unisuam.edu.br",
        "ouvidoria@unisuam.edu.br"
    ];

    const ccEmailsString = ccEmails.join(", ");
    navigator.clipboard.writeText(ccEmailsString)
        .then(() => {
            alert("E-mails em CCO copiados para a área de transferência!");
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert("Erro ao copiar os e-mails em CCo. Por favor, copie manualmente.");
        });
}
