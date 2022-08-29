custom_hat = function() {
    app.assets.models.children[119] = app.assets.models.copy(app.assets.models.children[index])
    app.assets.models.children[119].name = 'hat-custom'
    app.assets.models.children[119].userData = app.assets.models.children[69].userData
    app.assets.models.children[119].userData.order = 16
}

function delete_hat() {
    var delete_it_all = {}
    app.storage.set('setting-orders', btoa(JSON.stringify(delete_it_all)))
}