class TextOperation {
    constructor(type, char) {
        this.type = type;
        this.char = char;
    }
    
}

class SimpleTextEditor {

    constructor() {
        this.text = "";
        this.history = [];
    }

    add(char) {
        this.text += char;
        this.history.push(new TextOperation('add', char));
        this.display();
    }

    delete() {
        if(this.text.length === 0) return;

        const lastChar = this.text[this.text.length - 1];
        this.text = this.text.slice(0, -1);
        this.history.push(new TextOperation('delete', lastChar));
        this.display();
    }

    undo () {
        if(this.text.length === 0) return;

        const lastOpt = this.history.pop();
        if(lastOpt.type === 'add') {
            this.text = this.text.slice(0, -1);
        } else if(lastOpt.type === 'delete') {
            this.text += lastOpt.char;
        }
        this.display();
    }

    display () {
        console.log(`Current Text: "${this.text}"`);
        return this.text;
    }

}

const editor = new SimpleTextEditor();

console.log("Test 1 (Normal) passed => ", (editor.add("A"), editor.add("B"), editor.display()) ==="AB");
console.log("Test 2 (Normal) passed => ", (editor.delete(), editor.display()) ==="A");
console.log("Test 3 (Normal) passed => ", (editor.undo(), editor.display()) ==="AB");

const edgeeditor = new SimpleTextEditor();

console.log("Test 1 (Edge) passed => ", (edgeeditor.delete(), edgeeditor.display()) === "");
console.log("Test 2 (Edge) passed => ", (edgeeditor.undo(), edgeeditor.display()) === "");
edgeeditor.add("Z");
edgeeditor.undo();
console.log("Test 3 (Edge) passed => ", (edgeeditor.delete(), edgeeditor.display()) === "");