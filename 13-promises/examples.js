// pending fulfilled rejected
const wait = milliseconds => {
    return new Promise((resolve, reject) => {
        if (milliseconds > 1500) {
            reject(`Reject, too much time to run. ${milliseconds} Milliseconds`);
        } else {
            setTimeout(() => {
                resolve("Run after 1 second.");
            }, milliseconds);
        }
    });
};

const page = () => {
    const time = wait(2000);
    time.then(resolve => {
        console.log(resolve);
    }).catch(error => {
        console.log(error);
    }).finally(() => {
        console.log("Done");
    });
};

page();