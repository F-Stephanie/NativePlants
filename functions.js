let focus_img;

function highlight(id){
    document.getElementById(id).style.border = "outset 10px lightpink";
}

function nolight(id){
    document.getElementById(id).style.border = "0px";
    document.getElementById(id).style.border = "inset burlywood 15px";
}

function makeBigger(id){
    makeSmaller();
    let image = document.getElementById(id);
    focus_img = image;

    console.log("in makeBigger");
    image.style.width = "60%";
    image.style.zIndex = "3";
    image.style.backgroundColor = "white";
    image.style.position = "fixed";
    image.style.top = "1%";
    image.style.left = "18%";

    let body = document.body;
    body.style.backgroundColor = "rgb(207, 207, 207)";
    // body.style.opacity = "30%";

    console.log("here1");
    let img = document.getElementsByClassName("image");
    for(let i = 0; i < img.length; i++){
        img[i].style.backgroundColor = "gray";
        img[i].style.opacity = "30%";    
        img[i].style.zIndex = "2";
    }
    
    image.style.opacity = "100%";
    

    let close_button = document.getElementById("close_button");
    close_button.hidden = false;

    let left_arrow = document.getElementById("left_arrow");
    let right_arrow = document.getElementById("right_arrow");

    left_arrow.hidden = false;
    right_arrow.hidden = false;   
}

function makeSmaller(){
    console.log("in makeSmaller");
    let body = document.body;
    let img = document.getElementsByClassName("image");

    for(let i = 0; i < img.length; i++){
        img[i].style.width = "30%";
        img[i].style.opacity = "100%";
        img[i].style.position = "static";
        img[i].style.zIndex = "2";
    }

    body.style.backgroundColor = "azure";
    body.style.zIndex = "0";
    body.style.opacity = "100%";

    let close_button = document.getElementById("close_button");
    close_button.hidden = true;

    let left_arrow = document.getElementById("left_arrow");
    let right_arrow = document.getElementById("right_arrow");

    left_arrow.hidden = true;
    right_arrow.hidden = true;   
}

function goLeft(){
    let img = document.getElementsByClassName("image");
    let new_image;
    for(let i = 0; i < img.length; i++){
        if(img[i].id === focus_img.id){
            if(i == 0){
                new_image = img[11];
            }
            else{
                new_image = img[i-1];
            }
        }
    }
    makeSmaller();
    makeBigger(new_image.id);

}

function goRight(){
    let img = document.getElementsByClassName("image");
    let new_image;
    for(let i = 0; i < img.length; i++){
        if(img[i].id === focus_img.id){
            if(i == 11){
                new_image = img[0];
            }
            else{
                new_image = img[i+1];
            }
        }
    }
    makeSmaller();
    makeBigger(new_image.id);
}


function getQuizResults(){
    let quiz_answers = document.getElementsByClassName("options");
    let array = new Array();
    for(let i = 0; i < quiz_answers.length; i++){
        if(quiz_answers[i].checked === true){
            array.push(quiz_answers.value);
        }
    }

    let uniqueCode = generateUniqueCode();
    switch (uniqueCode) {
        case "full_surflo":
            displayPlants(["shining_blue_star", "butterfly_milkweed", "purple_coneflower"]);
            break;
        case "part_shrflo":
            displayPlants(["shining_blue_star", "crested_iris", "zigzag_goldenrod", "solomons_seal", "indian_pink", "wild_geranium", "mayapple", "purple_coneflower"]);
            break;
        case "full_shrflo":
            displayPlants(["crested_iris", "zigzag_goldenrod", "solomons_seal", "indian_pink", "mayapple", "wild_geranium"]);
            break;
        case "full_sudflo":
            displayPlants(["wild_bergamot", "butterfly_milkweed", "aromatic_aster", "purple_poppy_mallow", "purple_coneflower"]);
            break;
        case "part_shdflo":
            displayPlants(["aromatic_aster", "indian_pink", "wild_geranium", "purple_coneflower"]);
            break;
        case "full_shdflo":
            displayPlants(["indian_pink", "wild_geranium"]);
            break;
        case "full_sunflo":
            displayPlants(["wild_bergamot", "shining_blue_star", "butterfly_milkweed", "purple_poppy_mallow", "aromatic_aster", "purple_coneflower"]);
            break;
        case "part_shnflo":
            displayPlants(["shining_blue_star", "aromatic_aster", "crested_iris", "zigzag_goldenrod", "mayapple", "indian_pink", "solomons_seal", "wild_geranium", "purple_coneflower"]);
            break;
        case "full_shnflo":
            displayPlants(["crested_iris", "zigzag_goldenrod", "solomons_seal", "indian_pink", "mayapple", "wild_geranium"]);
            break;
        case "full_surfer":
            displayPlants(["palm_sedge", "prarie_dropseed"]);
            break;
        case "part_shrfer":
            displayPlants(["palm_sedge", "bristle_leaf_sedge", "maidenhair_fern", "sensitive_fern", "christmas_fern"]);
            break;
        case "full_shrfer":
            displayPlants(["bristle_leaf_sedge", "maidenhair_fern", "sensitive_fern", "christmas_fern"]);
            break;
        case "full_sudfer":
            displayPlants(["prarie_dropseed","palm_sedge"]);
            break;
        case "part_shdfer":
            displayPlants(["oak_sedge", "palm_sedge", "bristle_leaf_sedge"]);
            break;
        case "full_shdfer":
            displayPlants(["oak_sedge", "bristle_leaf_sedge"]);
            break;
        case "full_sunfer":
            displayPlants(["palm_sedge", "prarie_dropseed"]);
            break;
        case "part_shnfer":
            displayPlants(["oak_sedge", "palm_sedge", "bristle_leaf_sedge", "maidenhair_fern", "sensitive_fern", "christmas_fern"]);
            break;
        case "full_shnfer":
            displayPlants(["oak_sedge", "bristle_leaf_sedge", "maidenhair_fern", "sensitive_fern", "christmas_fern"]);
            break;
        case "full_surveg":
            displayPlants(["pawpaw", "jerusalem_artichoke", "american_hazelnut", "wild_bergamot"]);
            break;
        case "part_shrveg":
            displayPlants(["pawpaw", "jerusalem_artichoke", "solomons_seal", "american_hazelnut", "mayapple"]);
            break;
        case "full_shrveg":
            displayPlants(["mayapple", "american_hazelnut", "solomons_seal"]);
            break;
        case "full_sudveg":
            displayPlants(["jerusalem_artichoke", "wild_bergamot"]);
            break;
        case "part_shdveg":
            displayPlants(["jerusalem_artichoke", "persimmon"]);
            break;
        case "full_shdveg":
            for(let j = 0; j < 9; j++){
                let imageElement = document.getElementById("plantImage" + (j + 1));
                if (imageElement) {
                    imageElement.hidden = true;
                }
            }
            document.getElementById("no_results").hidden = false;
            break;
        case "full_sunveg":
            displayPlants(["pawpaw", "jerusalem_artichoke", "american_hazelnut", "wild_bergamot"]);
            break;
        case "part_shnveg":
            displayPlants(["jerusalem_artichoke", "solomons_seal", "pawpaw", "american_hazelnut", "mayapple", "persimmon"]);
            break;
        case "full_shnveg":
            displayPlants(["american_hazelnut", "mayapple", "solomons_seal"]);
            break;
        default:
            console.log("error");
            break;
    }

}

function generateUniqueCode() {
    document.getElementById("no_results").hidden = true;

    // Get the selected values for each group
    var sunlight = document.querySelector('input[name="sunlight"]:checked').value;
    var soilType = document.querySelector('input[name="soilType"]:checked').value;
    var plantType = document.querySelector('input[name="plantType"]:checked').value;

    // Create a unique code based on the combination of options
    var uniqueCode = sunlight.substring(0, 7) +
                    soilType.substring(0, 1) +
                    plantType.substring(0, 3);

    // Display or use the unique code as needed
    console.log("Unique Code: " + uniqueCode);

    return uniqueCode;
}

function displayPlants(plantNames) {
    // Update image sources based on the plant names
    let i = 0;
    for (i = 0; i < plantNames.length; i++) {
        let imageElement = document.getElementById("plantImage" + (i + 1));
        if (imageElement) {
            // Assuming your images are in a folder called "images"
            imageElement.src = "images/" + plantNames[i] + ".jpg";
            imageElement.hidden = false;
        }
    }
    for(let j = i; j < 9; j++){
        let imageElement = document.getElementById("plantImage" + (j + 1));
        if (imageElement) {
            imageElement.hidden = true;
        }
    }
}
