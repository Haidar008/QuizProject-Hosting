import React from "./React";
import JS from "./JavaScript";
import CSS from "./CSS";
import CPP from "./CPLUSPLUS";
import apti from "./Aptitude";
import DBMS from "./DBMS";
import HTML from "./HTML";
import GK from "./generalKnowledge";
import PY from "./Python"
import algo from "./Algorithms";
import OS from "./OS";
import dataStructureQuestions from "./DataStructure";

function getQuestions(category){
    let questions=[];
    console.log(category);
    if(category === "Data Structures"){
        questions=dataStructureQuestions;
    }

    if(category === ""){

    }

    if(category === ""){

    }

    if(category === ""){
        
    }
    
    if(category === ""){
        
    }

    if(category === ""){
        
    }

    if(category === ""){
        
    }

    if(category === ""){
        
    }

    if(category === ""){
        
    }

    if(category === ""){
        
    }

    if(category === ""){
        
    }

    if(category === ""){
        
    }

    if(category === ""){
        
    }

    if(category === ""){
        
    }

    if(category === ""){
        
    }

    return questions;
}

export default getQuestions;

