class Movement extends Phaser.Scene {
    constructor() {
        super("moveScene");
        this.my = {sprite: {}};
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("playerBody", "character_roundYellow.png");
        this.load.image("sword", "item_sword.png");
    }

    create() {
        let my = this.my;
        my.sprite.body = this.add.sprite(500, 700, "playerBody");
        my.sprite.projectile = this.add.sprite(500, 700, "sword");
        my.sprite.projectile.visible = false;

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    
    update() {
        let my = this.my;
        if (this.aKey.isDown) {
            my.sprite.body.x -= 5;
            if (my.sprite.body.x <= 0) {
                my.sprite.body.x = 0;
            }
        }

        if (this.dKey.isDown) {
            my.sprite.body.x += 5;
            if (my.sprite.body.x >= 1000) {
                my.sprite.body.x = 1000;
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            my.sprite.projectile = this.add.sprite(my.sprite.body.x, 700, "sword");
        }

        if (my.sprite.projectile) {
            my.sprite.projectile.y -= 5;
        }
    }
}