
// checks if they are valid
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
    }
    return "cant confirm,"
};

// fee's
function Fee(Pay, Upkeep = 0.3) {
    const FinalPay = Pay * Upkeep;
    return FinalPay

};

// checks for how long they are holding
function Duration(Days) {

    let isOneDay = Days === 1;
    let isOneWeek = Days >= 2 && Days <= 7;
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

// how big it is
function Capacity(size) {
    let small = size >= 1 && size <= 9;
    let medium = size >= 10 && size <= 19;
    let large = size >= 20;

    if (small) {
        return {
            size: "small sized argument"

        }
    }
    if (medium) {
        return { size: "medium sized argument" }
    }
    if (large) {
        return { size: "large sized argument" }
    }
    return "cannot acquire,"
};
// label used
function Label(langauge) {
    let program = langauge === 'Javascript';
    let programtwo = langauge === 'python';
    let programthree = langauge === 'HTML';
    if (program) { return { Program: 'Javascript' } }
    else if (programtwo) { return { program: 'python' } }
    else if (programthree) { return { Program: 'HTML' } }
    return "sorry, this isnt an option"
};
// gives all sucesses, fails and skips
function Summary(sucesses, fails, skips) {

    const FinalTotal = sucesses + fails + skips;
    if (sucesses < 0) { return { error: "NO NEGATIVES ALLOWED " } };
    if (fails < 0) { return { error: "NO NEGATIVES ALLOWED " } };
    if (skips < 0) { return { error: "NO NEGATIVES ALLOWED " } };

    if (FinalTotal) { return { TotalArguments: FinalTotal } }

    return "No number can be reached"

};


console.log(Validation(true), Fee(10), Duration(1), Capacity(1), Label('Javascript'), Summary(30, 10, 5));
console.log(Validation(false), Fee(20), Duration(3), Capacity(11), Label('python'), Summary(30, 40, 14));
console.log(Validation(false), Fee(40), Duration(17), Capacity(20), Label('HTML'), Summary(80, 22, 36));
console.log(Validation("false"), Fee(0), Duration(-10), Capacity(-2), Label('unreal engine'), Summary(-30, -10, 0));