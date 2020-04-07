const firebase = require("firebase");

const getUsers = () => {
    const userReference = firebase.database().ref("/Users/");
    return (new Promise((resolve, reject) => {
        //Attach an asynchronous callback to read the data
        userReference.on("value", function (snapshot) {
            const folders = snapshot.val();
            if (folders === null) {
                resolve([]);
            } else {
                const data = Object.keys(folders).map(o => Object.assign({ userName: o }, folders[o]));
                resolve(data);
            }
            userReference.off("value");
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            reject("The read failed: " + errorObject.code);
        });
    }));
}

const createUser = (user) => {
    const referencePath = '/Users/' + user.userName + '/';
    const userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.set({ Name: user.Name, Age: user.Age }, function (error) {
            if (error) {
                reject("Data could not be saved." + error);
            } else {
                resolve(user)
            }
        });
    }));
}

const updateUser = (user) => {
    const referencePath = '/Users/' + user.userName + '/';
    const userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.update({ Name: user.Name, Age: user.Age }, function (error) {
            if (error) {
                reject("Data could not be updated." + error);
            } else {
                resolve(user)
            }
        });
    }));
}

const deleteUser = (user) => {
    const referencePath = '/Users/' + user.userName + '/';
    const userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.remove((error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(user)
            }
        })
    }));
}

module.exports = { getUsers, createUser, updateUser, deleteUser }