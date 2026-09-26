the if statement expected: 

let isvalid = True === 'true';
    let isinvalid = False === 'false';

    let ValidationCheck = (isinvalid || isvalid);

    if (!ValidationCheck) {
        return {
            valid: "cant confirm",
        };
    }

    if (isinvalid) {
        return {
            Allowed: false,
            Valid: "false"

        };
    }

    if (isvalid) {
        return {
            Allowed: true,
            Valid: "true"
        };
    }
// expected result: if i type in fale, i get false and true, i get true, it worked out

function Validation(Verify) {
    let isvalid = Verify === true;
    let isInvalid = Verify === false;



    if (isInvalid) {
        return {
            Valid: "false"

        };
    }

    if (isvalid) {
        return {

            Valid: "true"
        };
    }}
    return "cant confirm,"
// fees was the simplest but expected it to somehow fail, luckliy it didnt, consolelog input is Pay which gave correct math so 20 * 0.3 = 6

function Fee(Pay, Upkeep = 0.3) {
    const FinalPay = Pay * Upkeep;
    return FinalPay }


return should return either true, false or cant confirm, it only does cant confirm


function Duration(OneDay, OneWeek, OneMonth) {
    let isOneDay = (OneDay = 1);
    let isWeek = (OneWeek >= 7 || OneWeek <= 7);
    let isMonth = (OneMonth >= 31);

    let DurationCheck = (isOneDay || isWeek || isMonth)
 if (isOneDay) {
        return {
            Use: "one day"
        }
    };
    if (isWeek) {
        return {
            Use: "one week"
        }
    }
    if (isOneDay) {
        return {
            Use: "one month"
        }
    }

};

expected results: Input = "one day", "one week" etc, what happened was in defaulting to IsOneDay

function Duration(Days) {

    let isOneDay = Days === 1;
    let isOneWeek = Days === 7;
    let isMonth = Days >= 8 && Days <= 31;


    if (isOneDay) {
        return {
            Use: "one day"
        }
    }
    if (isOneWeek) {
        return {
            Use: "one week"
        }
    }
    if (isMonth) {
        return {
            Use: "one month"
        }
    }
    return "cannot acquire,"
};



tried to put all togther in one let but didnt work (this code isnt the full thing, its from memory as i cant find as last timeline of it)
function Label(langauge) {
    let javscript = langauge === 'javascript' 
    let python = langauge === 'python'
    let Cplus = langauge === 'C++'

    if (javascript){return{javascript}}




}

// second attempt at the Label function, wanted to get function to recongize specify langauge models, this one worked out
function Label(langauge) {
    let program = langauge === 'Javascript';
    let programtwo = langauge === 'python';
    let programthree = langauge === 'HTML';
    if (program) { return { Program: 'Javascript' } }
    else if (programtwo) { return { program: 'python' } }
    else if (programthree) { return { Program: 'HTML' } }
    return "sorry, this isnt an option"
};





// for function summary attempted code to get sucesses, fails, and skips but again didnt work or default to sucess
function Summary(sucesses, fails, skips) {

    const Finalsucess = sucesses
    const Finalfail = fails
    const Finalskip = skips

    if (Finalsucess && Finalfail && Finalskip) {
        return {
            Sucesses: sucesses,
            fails: fails,
            skips: skips
        }}


    };

function Summary(sucesses, fails, skips) {


    if (sucesses && fails && skips) {
        return {
            Use: "one day"
        }
    }


    return "No number can be reached"

};