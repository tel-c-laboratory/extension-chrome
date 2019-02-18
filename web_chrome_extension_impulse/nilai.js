function min_value(tipe){
    if(tipe=="test_awal"){
        if(document.getElementById('min_tes_awal').value != ""){
            return document.getElementById('min_tes_awal').value
        }else{
           return 999
        }
    }
    else if (tipe=="jurnal") {
        if(document.getElementById('min_jurnal').value != "") {
            return document.getElementById('min_jurnal').value
        }else{
            return 999
        }
    }
    else if (tipe=="test_akhir") {
        if(document.getElementById('min_tes_akhir').value != "") {
            return document.getElementById('min_tes_akhir').value
        }else{
            return 999
        }
    }
    else if (tipe=="skill") {
        if(document.getElementById('min_skill').value != "") {
            return document.getElementById('min_skill').value
        }else{
            return 999
        }
    }
}

function max_value(tipe){
    if(tipe=="test_awal") {
        if(document.getElementById('max_tes_awal').value != "") {
            return document.getElementById('max_tes_awal').value
        }else{
            return 999
        }
    }else if(tipe=="jurnal") {
        if(document.getElementById('max_jurnal').value != "") {
            return document.getElementById('max_jurnal').value
        }else{
            return 999
        }
    }
    else if(tipe=="test_akhir") {
        if(document.getElementById('max_tes_akhir').value != "") {
            return document.getElementById('max_tes_akhir').value
        }else{
            return 999
        }
    }
    else if(tipe=="skill") {
        if(document.getElementById('max_skill').value != "") {
            return document.getElementById('max_skill').value
        }else{
            return 999
        }
    }
}

// nilai test awal
document.getElementById("button_test_awal").addEventListener('click', function() {
    function nilai_test_awal(min_val,max_val){
        if(min_val==999){
            alert("minimal value TEST AWAL diisi dong gan")
            return false
        }
        else if(max_val==999){
            alert("maksimal value TEST AWAL diisi dong gan")
            return false
        }
        var links = document.getElementsByClassName('gradeX');
        for (var i = 0; i < links.length; i++) {
            try {
                nilai_test_awalv = Math.floor(Math.random() * (max_val - min_val + 1) ) + min_val
                if(document.getElementsByName("param1[]")[i].value==""){
                    document.getElementsByName("param1[]")[i].value=nilai_test_awalv
                }
            }
            catch(err) {
                document.createElement('form').submit.call(document.getElementById('formNilaiPraktikan'));
            }
        }
    }
    chrome.tabs.executeScript({
        code: '(' + nilai_test_awal + ')('+min_value("test_awal")+','+max_value("test_awal")+');'
    });
});

// nilai jurnal
document.getElementById("button_jurnal").addEventListener('click', function() {
    function nilai_jurnal(min_val,max_val){
        if(min_val==999){
            alert("minimal value JURNAL diisi dong gan")
            return false
        }
        else if(max_val==999){
            alert("maksimal value JURNAL diisi dong gan")
            return false
        }
        var links = document.getElementsByClassName('gradeX');
        for (var i = 0; i < links.length; i++) {
            try {
                nilai_jurnalv = Math.floor(Math.random() * (max_val - min_val + 1) ) + min_val
                if(document.getElementsByName("param2[]")[i].value==""){
                    document.getElementsByName("param2[]")[i].value=nilai_jurnalv
                }
            }
            catch(err) {
                document.createElement('form').submit.call(document.getElementById('formNilaiPraktikan'));
            }
        }
    }
    chrome.tabs.executeScript({
        code: '(' + nilai_jurnal + ')('+min_value("jurnal")+','+max_value("jurnal")+');'
    });
});

// nilai_test_akhir
document.getElementById("button_test_akhir").addEventListener('click', function() {
    function nilai_test_akhir(min_val,max_val){
        if(min_val==999){
            alert("minimal value TEST AKHIR diisi dong gan")
            return false
        }
        else if(max_val==999){
            alert("maksimal value TEST AKHIR diisi dong gan")
            return false
        }
        var links = document.getElementsByClassName('gradeX');
        for (var i = 0; i < links.length; i++) {
            try {
                nilai_test_akhirv = Math.floor(Math.random() * (max_val - min_val + 1) ) + min_val
                if(document.getElementsByName("param3[]")[i].value==""){
                    document.getElementsByName("param3[]")[i].value=nilai_test_akhirv
                }
            }
            catch(err) {
                document.createElement('form').submit.call(document.getElementById('formNilaiPraktikan'));
            }
        }
    }
    chrome.tabs.executeScript({
        code: '(' + nilai_test_akhir + ')('+min_value("test_akhir")+','+max_value("test_akhir")+');'
    });
});

// nilai skill
document.getElementById("button_skill").addEventListener('click', function() {
    function nilai_skill(min_val,max_val){
        if(min_val==999){
            alert("minimal value SKILL diisi dong gan")
            return false
        }
        else if(max_val==999){
            alert("maksimal value SKILL diisi dong gan")
            return false
        }
        var links = document.getElementsByClassName('gradeX');
        for (var i = 0; i < links.length; i++) {
            try {
                nilai_skillv = Math.floor(Math.random() * (max_val - min_val + 1) ) + min_val
                if(document.getElementsByName("param4[]")[i].value==""){
                    document.getElementsByName("param4[]")[i].value=0
                }
            }
            catch(err) {
                document.createElement('form').submit.call(document.getElementById('formNilaiPraktikan'));
            }
        }
    }
    chrome.tabs.executeScript({
        code: '(' + nilai_skill + ')('+min_value("skill")+','+max_value("skill")+');'
    });
});