const depname = document.getElementById('depname');
const namesurname = document.getElementById('namesurname');
const date = document.getElementById('date');
const time = document.getElementById('time');
const persons = document.getElementById('persons');
const patrol = document.getElementById('patrol');
const patrolNumber = document.querySelector('.input2 input');
const details = document.getElementById('details');

const outputPage = document.querySelector('.page');

document.addEventListener('DOMContentLoaded', updateOutput);

depname.addEventListener('input', updateOutput);
namesurname.addEventListener('input', updateOutput);
date.addEventListener('input', updateOutput);
time.addEventListener('input', updateOutput);
persons.addEventListener('input', updateOutput);
patrol.addEventListener('input', updateOutput);
patrolNumber.addEventListener('input', updateOutput);
details.addEventListener('input', updateOutput);

function updateOutput() {
    outputPage.innerHTML = `
        <div style="font-family: 'Times New Roman'; font-size: 12px;">
            <p style="text-align: center; font-size: 14px; line-height: 16px;"><strong>${depname.options[depname.selectedIndex].text}<br>Şikayet Dilekçesi</strong></p>
            <span style="display: block; width: 1px; height: 1px; margin-bottom: 35px;"></span>
            <p><strong>Dilekçe Tarihi:</strong> ${date.value ? date.value : '________'}</p>
            <p><strong>Dilekçe Saati:</strong> ${time.value ? time.value : '________'}</p>
            <p><strong>Dahil Olan Kişiler:</strong> ${persons.value ? persons.value : '________'}</p>
            <p><strong>Devriye Kodu:</strong> ${patrol.value ? patrol.value : '________'}-${patrolNumber.value ? patrolNumber.value : '________'}</p>
            <span style="display: block; width: 1px; height: 1px; margin-bottom: 25px;"></span>
            <p><strong>Şikayet:</strong><br> ${details.value ? details.value : '________'}</p>
            <br>
            <br>
            <p style="text-align: right;">Saygılarımla,<br>${namesurname.value ? namesurname.value : '________'}</p>
        </div>
    `;
}

const saveButton = outputPage;

saveButton.addEventListener('click', function() {
    const depnameValue = document.getElementById('depname').value;
    const namesurnameValue = document.getElementById('namesurname').value;
    const savefDepname = depnameValue.replace(/\s+/g, '').toLowerCase();
    const savefNamesurname = namesurnameValue.replace(/\s+/g, '').toLowerCase();
    html2canvas(document.querySelector('.page')).then(canvas => {
        const link = document.createElement('a');
        link.download = savefNamesurname+'_'+savefDepname+'_sikayetdilekcesi.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});
