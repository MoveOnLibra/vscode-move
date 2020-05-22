import * as vscode from 'vscode';
import * as path from "path";

function compileMove() {
	vscode.window.showErrorMessage("Not support currently!");
    return;
}

export async function activate(context: vscode.ExtensionContext) {
	// compile
	const command = 'move.compile';
	context.subscriptions.push(vscode.commands.registerCommand(command, compileMove));
}

// this method is called when your extension is deactivated
export function deactivate() {
}

