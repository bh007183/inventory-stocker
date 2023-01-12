let image = document.querySelector("input")

function newBlock(event){
    document.getElementById("body").insertAdjacentHTML("afterend",`<img src="${event.target.result}" id="image1" data-set="${document.getElementsByTagName("img").length}"style="width: 100%"/>
    <div id="checkboxContainer">
    <input type="checkbox" id="xs">
    <label for="xs">xs</label><br>
    <input type="checkbox" id="s">
    <label for="s">s</label><br>
    <input type="checkbox" id="m">
    <label for="m">m</label><br>
    <input type="checkbox" id="l">
    <label for="l">l</label><br>
    <input type="checkbox" id="xl">
    <label for="xl">xl</label><br>
    <input type="checkbox" id="xxl">
    <label for="xxl">xxl</label><br>
</div>
<br>`)

}

  image.addEventListener('change', (event) => {

    var selectedFile = event.target.files[0]
    console.log(event.target.files)
    var reader= new FileReader()
   
    reader.onload = function(event) {
        console.log(event.target.result)
        newBlock(event)
  };
  reader.readAsDataURL(selectedFile);
  document.body.getElementById("imageUpload").value=""

  })

