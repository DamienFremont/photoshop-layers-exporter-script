/**
 * 
 * 
 * Photoshop script to export layer from project to PNG 
 * images.
 * 
 * Usage: open a photoshop project, modify the output var
 * value in this script, then execute it with Photoshop.
 * 
 * @param input Current Photoshop project
 * @param ouput Target folder path to
 */

var output = $.getenv("USERPROFILE") + "/Documents/";

/* *************************************************** */

//Get the currently opened Photoshop document
var doc = app.activeDocument;

//Show each layer each time and save a snapshot
for (var i = 0; i < doc.layers.length; i++) {

    //Hide all the layers
    for (var j = 0; j < doc.layers.length; j++) {
        doc.layers[j].visible = false;
    }

    // show layer
    var layerIndex = i;
    doc.layers[layerIndex].visible = true;

    var layerName = doc.layers[layerIndex].name;
    var filename = doc.name;
    filename = filename.slice(0, filename.lastIndexOf(".")); //just add this line to the construction.  

    // save
    var file = new File(output + filename + "_" + layerName + ".png");
    var saveOptions = new PNGSaveOptions();
    doc.saveAs(file, saveOptions, true, Extension.LOWERCASE);
}