function kirimdata(){
    var name = document.getElementById("nama").value; 
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value; 
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;
    
   
    alert(
        "nama : " + name +
        "\nnim : " + nim +
        "\npeminatan : " + peminatan +
        "\nalamat : " + alamat +
        "\nangkatan : " + angkatan +
        "\ntanggal : " +tanggal
        

    )
}
function pindahHalaman() {
    window.location.href = "index2.html";
  }