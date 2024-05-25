let nftStore = [];

 function mintNft(name , time , owner){
    let nftData = {
        name : name,
        time: time , 
        owner : owner
    };

    nftStore.push(nftData);
}


const listNFT =()=>{
    nftStore.forEach((e)=>{console.log(e)})
}

const getTotalSupply = () =>{
    return nftStore.length;
}


mintNft("nikoCHan" , 36, "nikhil");
mintNft("horiSan" , 36, "sunny");
mintNft("ishikawa" , 36, "sachin");
mintNft("izumi" , 36, "niko");

listNFT();

console.log("the number of NFT so far is " +getTotalSupply())