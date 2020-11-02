const comment = require('../../../GraphQL/instaclone/server/models/comment');
const UserSearch = require('../models/userSearch')

function userSearch(input) {
    try {
        const search = new UserSearch({
            idUser: input.idUser,
            label: input.label,
            codprov: input.codprov,
            idpob: input.idpob,
        })
        search.save();
        return search;
    } catch (error) {
        console.log(error);
    }
    console.log('usersearch');
    return null;
}

async function getUserSearch(idUser) {
    console.log(idUser);
    const search = await UserSearch.find({ idUser })
    console.log(search)
    return null;
}

module.exports = {
    userSearch,
    getUserSearch,
} 