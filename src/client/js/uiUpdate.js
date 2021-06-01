function updateInterface(content) {
   let obj= {
    polarity:document.getElementById('polarity'),
    agreement: document.getElementById("agreement"),
      subjectivity: document.getElementById("subjectivity"),
   confidence: document.getElementById("confidence"),
   irony: document.getElementById("irony")
   } 
    obj.polarity.innerHTML = `Polarity: ${content.score_tag}`;
   obj.agreement.innerHTML = `Agreement: ${content.agreement}`;
 obj.subjectivity.innerHTML = `Subjectivity: ${content.subjectivity}`;
    obj.confidence.innerHTML = `Confidence: ${content.confidence}`;
    obj.irony.innerHTML = `Irony: ${content.irony}`;
}

export { updateInterface }