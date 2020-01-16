const slots = [
    { 
      id: "ring1",
      list: ["Faire", "Jouer", "Parler", "Se concentrer", "Arreter", "Partir", "Revenir", "Recevoir", "Donner", "Ecrire", "Voyager", "Aller"]
    },
    
    {
      id: "ring2",
      list: [ "Sport", "Code", "Cinema", "Piscine", "Plage", "Randonné", "Plonger", "Bierre", "Whisky", "Rhum", "Hinano", "Monster"]
    },
    
    {
      id: "ring3",
      list: ["Bonheur", "Joie", "Heureux", "Sourire", "S'amuser", "Se détendre", "Musique", "Domir", "Papilloner", "Surpris", "Calmer", "Attirer"]
    }
    ]
    
    const slotsPerReel = 12;
    reelRadius = 187;
    
    function createSlots(ring, num) {
      const slotAngle = 360 / slotsPerReel;
      let seed = getSeed();
    
      for (let i = 0; i < slotsPerReel; i++) {
        const slot = document.createElement("div");
    
        slot.className = "slot";
    
        let transform = "rotateX(" + slotAngle * i + "deg) translateZ(" + reelRadius + "px)";
        slot.style.transform = transform;
    
        slot.insertAdjacentHTML('beforeend', `<p>${slots[num].list[i]}</p>`);
        ring.append(slot);
      }
    }
    
    function getSeed() {
      return Math.floor(Math.random() * slotsPerReel);
    }
    
    function spin(timer) {
      for (let i = 1; i < 4; i++) {
        let seed = getSeed();
    
        const el = document.getElementById("ring" + i)
        el.style.animation = (
            "back-spin 1s, spin-" + seed + " " + (timer + i * 0.5) + "s"
        );
        el.setAttribute("class", "ring spin-" + seed);
      }
    }
    
    createSlots(document.getElementById("ring1"),0);
    createSlots(document.getElementById("ring2"),1);
    createSlots(document.getElementById("ring3"),2);
    spin(2);
    
    const button = document.getElementById("spinbtn");
    button.addEventListener("click", () => {
      let timer = 2;
      spin(timer);
    });