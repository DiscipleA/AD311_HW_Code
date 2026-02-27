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
        if (this.text.length === 0) return;
        
        const lastChar = this.text[this.text.length - 1];
        this.text = this.text.slice(0, -1);
        this.history.push(new TextOperation('delete', lastChar));
        this.display();
    }

    undo() {
        if (this.history.length === 0) return;
        const lastOp = this.history.pop();
        if (lastOp.type === 'add') {
            this.text = this.text.slice(0, -1);
        } else if (lastOp.type === 'delete') {
            this.text += lastOp.char;
        }
        this.display();
    }

    display() {
        console.log(`Current Text: "${this.text}"`);
        return this.text;
    }
}

const editor = new SimpleTextEditor();

console.log("Test 1 (Normal) passed =>", (editor.add('A'), editor.add('B'), editor.display()) === "AB");
console.log("Test 2 (Normal) passed =>", (editor.delete(), editor.display()) === "A");
console.log("Test 3 (Normal) passed =>", (editor.undo(), editor.display()) === "AB");

const edgeEditor = new SimpleTextEditor();
console.log("Test 1 (Edge) passed =>", (edgeEditor.undo(), edgeEditor.display()) === ""); // Undo empty
console.log("Test 2 (Edge) passed =>", (edgeEditor.delete(), edgeEditor.display()) === ""); // Delete empty
edgeEditor.add('Z');
edgeEditor.undo();
console.log("Test 3 (Edge) passed =>", (edgeEditor.undo(), edgeEditor.display()) === ""); // Undo more than exists