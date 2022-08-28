function custom_hat(index) {
    app.assets.models.children[119] = app.assets.models.copy(app.assets.models.children[index])
    app.assets.models.children[119].name = 'hat-custom'
    app.assets.models.children[119].userData = app.assets.models.children[48].userData
    app.assets.models.children[119].userData.order = 16
}