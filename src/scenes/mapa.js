// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Mapa extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Mapa")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa').setScale();
        // Boton para ir al menu
        
        var botonre = this.add.image(70, 70, 'botonvolver').setScale(0.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(70, 70, 'botonvolver2').setScale(0.5))
      .on('pointerout', () => this.add.image(70, 70, 'botonvolver').setScale(0.5))
      .on('pointerdown', () => this.botonreset())

      // Boton para ir al nivel 1 
      var nivel1 = this.add.image(150, 300, 'nivel1').setScale(0.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(150, 300, 'nivel1_2').setScale(0.5))
      .on('pointerout', () => this.add.image(150, 300, 'nivel1').setScale(0.5))
      .on('pointerdown', () => this.nivel1())

      // Boton para ir al nivel 2 
      var nivel2 = this.add.image(400, 300, 'nivel2').setScale(0.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(400, 300, 'nivel2_2').setScale(0.5))
      .on('pointerout', () => this.add.image(400, 300, 'nivel2').setScale(0.5))
      .on('pointerdown', () => this.nivel2())

      // Boton para ir al nivel 3 
      var nivel3 = this.add.image(650, 300, 'nivel3').setScale(0.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(650, 300, 'nivel3_2').setScale(0.5))
      .on('pointerout', () => this.add.image(650, 300, 'nivel3').setScale(0.5))
      .on('pointerdown', () => this.nivel3())
      
      
      
      

        



    };

    botonreset(){
        this.scene.start('MainMenu');
        
    }

    nivel1(){
        this.scene.start('Play');

    }

    nivel2(){
        this.scene.start('Play2');

    }

    nivel3(){
        this.scene.start('Play3');

    }

    
        
    
}
    
    
