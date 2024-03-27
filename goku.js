//name
//setName
//createdBy

const setNameButton=document.getElementById('setName');
const setNameHandler=()=>{
    const nameInput=document.getElementById('name');
    const createdBy=document.getElementById('createdBy');
    const name=nameInput.value;
    createdBy.innerHTML=`Aplicacion creada por: ${name}`;
    nameInput.value='';
};
setNameButton.addEventListener('click',setNameHandler);

// segundo paso
const imagenes=[
    '7688eb0e5ed2d085dcd7777d22254f49b774ffcc_00.jpg',
    '400859147_291568260553031_692545839907600137_n.jpg',
    '1127902piccolojpg.jpg',
    'artworks-000582422510-kal7eq-t500x500.jpg',
    'c78a3381208118b42a6f9e77b14d4bfc.jpg',
    'f2d9ce0a8cc99a1cbce3edd6d3b764bc98c0feec_00.jpg',
    'ff0ac0d3ec91d29ed01c7e42cae1cf9b.jpg',
    'gratis-png-sombrero-de-cabeza-homo-sapiens-superheroe-vegueta-thumbnail.png',
    'HHEKX4PHOBBV3JGZZCM3ONNSOA.avif',
    'Majin-Buu-aterriza-en-el-MCU-con-epico-crossover-de-Dragon-Ball-y-Marvel.webp',
    'sh_figuarts_majin_buu_good_SDCC_2022_exclusive_edition_01-600x600.webp',
];
const cargarImagen=(imgName)=>{
    return `img/${imgName}`
}

// tercer paso 
let goku=0;
const renderizarImagen=()=>{
    const characterImg=document.getElementById('characterImg');
    characterImg.src=cargarImagen(imagenes[goku]);
    if(goku==imagenes.length -1){
        goku=0;
    }else{
        goku++;
    }
    
};
const characterChange=document.getElementById('characterChange');
characterChange.addEventListener('click',renderizarImagen);