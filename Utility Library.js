function Validation(True, False) {
    let isvalid = True === 'true'
    let isinvalid = False === 'false'

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

        }
    }
    if (isvalid) {
        return {
            Allowed: true,
            Valid: "true"
        }
    };
};
function Fee(Pay, Upkeep = 0.3) {
    const FinalPay = Pay * Upkeep
    return FinalPay
};
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
function Capacity(single, small, medium) {

};

function Label(Fiction, NonFiction, Fantasy, ScienceFiction) { };

function Summary(send) { send = Validation, Fee, Duration, Capacity, Label };


console.log(Summary(true), Fee(10));
