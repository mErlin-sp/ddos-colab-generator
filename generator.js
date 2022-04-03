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
            let input_file = data.cells[0].source.toString()
            console.log(input_file)

            for (let archive = 1; archive <= archive_count; archive++) {
                let zip = new JSZip();

                for (let i = 0; i < file_count; i++) {
                    const xhttp = new XMLHttpRequest();
                    xhttp.open("GET", "https://random-word-api.herokuapp.com/word?number=5", false);
                    xhttp.send();

                    const response = JSON.parse(xhttp.responseText)
                    const id = response[0] + '-' + response[1] + '-' + response[2] + '-' + response[3] + '-' + response[4]

                    const output_file = input_file.replace('_replace_me_with_unique_name_in_latin_', id)
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