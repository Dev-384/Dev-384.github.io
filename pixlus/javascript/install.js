document.getElementById("url").innerHTML = window.location;

if(window.location.includes("pixlus/install")){
    var install = document.getElementById("install");

    fetchFile("../pixlus.zip");

    function fetchFile(url) {
        fetch(url).then(res => res.blob()).then(file => {
            let tempUrl = URL.createObjectURL(file);
            const aTag = document.createElement("a");
            aTag.href = tempUrl;
            aTag.download = url.replace(/^.*[\\\/]/, '');
            document.body.appendChild(aTag);
            aTag.click();
            URL.revokeObjectURL(tempUrl);
            aTag.remove();
        }).catch(() => {
            alert("Failed to download file.");
        });
    }
    window.close();
}