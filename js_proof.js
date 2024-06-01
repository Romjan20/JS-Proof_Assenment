/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFT's you have created.
*/

// Step 1: Create a variable to hold our NFTs
let NFTCollection = [];

// Step 2: Function to create and store an NFT
function mintNFT (title, artist, year, medium, dimensions, edition) {
    let NFT = {
        title: title,
        artist: artist,
        year: year,
        medium: medium,
        dimensions: dimensions,
        edition: edition
    };
    NFTCollection.push(NFT);
}

// Step 3: Function to list all NFTs and their metadata
function listNFTs () {
    for (let i = 0; i < NFTCollection.length; i++) {
        console.log("\n\n_____________________ DIGITAL ART NFT _________________________\n\n" );
        console.log("Title: " + NFTCollection[i].title);
        console.log("Artist: " + NFTCollection[i].artist);
        console.log("Year: " + NFTCollection[i].year);
        console.log("Medium: " + NFTCollection[i].medium);
        console.log("Dimensions: " + NFTCollection[i].dimensions);
        console.log("Edition: " + NFTCollection[i].edition);
        console.log("\n\n_____________________* * * * *_________________________\n" );
    }
}

// Step 4: Function to get the total number of NFTs we created
function getTotalSupply() {
    console.log("Total NFTs Minted So Far: " + NFTCollection.length);
}

// Passing the parameters to the NFTs
mintNFT("Sunset Overdrive", "Saif Raihan", 2023, "Digital Painting", "1920x1080", "1/100");
mintNFT("Abstract Thoughts", "Sadik Mahmud", 2021, "3D Render", "1080x1080", "1/50");
mintNFT("Cityscape", "Md Romjan Ali", 2022, "Digital Illustration", "2560x1440", "1/200");
mintNFT("Portrait of the Future", "Mahbub Gazi", 2024, "Digital Drawing", "2048x2048", "1/75");
// Call our functions 
listNFTs();
getTotalSupply();
