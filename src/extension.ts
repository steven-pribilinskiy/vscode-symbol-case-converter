import * as vscode from 'vscode';
import { toScreamingCase, toCamelCase, toSnakeCase, toKebabCase, toPascalCase, toLowerCase, toTitleCase, toUpperCase } from './utils';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('symbol-case-renamer.renameToScreamingCase', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const position = editor.selection.active;
        const wordRange = editor.document.getWordRangeAtPosition(position);
        const word = editor.document.getText(wordRange);

        const newName = toScreamingCase(word);

        const edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
            'vscode.executeDocumentRenameProvider',
            editor.document.uri,
            position,
            newName
        );
        if (!edit) {
            return false;
        }
        return vscode.workspace.applyEdit(edit);
    });

    disposable = vscode.commands.registerCommand('symbol-case-renamer.renameToCamelCase', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const position = editor.selection.active;
        const wordRange = editor.document.getWordRangeAtPosition(position);
        const word = editor.document.getText(wordRange);

        const newName = toCamelCase(word);

        const edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
            'vscode.executeDocumentRenameProvider',
            editor.document.uri,
            position,
            newName
        );
        if (!edit) {
            return false;
        }
        return vscode.workspace.applyEdit(edit);
    });

    disposable = vscode.commands.registerCommand('symbol-case-renamer.renameToSnakeCase', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const position = editor.selection.active;
        const wordRange = editor.document.getWordRangeAtPosition(position);
        const word = editor.document.getText(wordRange);

        const newName = toSnakeCase(word);

        const edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
            'vscode.executeDocumentRenameProvider',
            editor.document.uri,
            position,
            newName
        );
        if (!edit) {
            return false;
        }
        return vscode.workspace.applyEdit(edit);
    });

    disposable = vscode.commands.registerCommand('symbol-case-renamer.renameToKebabCase', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const position = editor.selection.active;
        const wordRange = editor.document.getWordRangeAtPosition(position);
        const word = editor.document.getText(wordRange);

        const newName = `"${toKebabCase(word)}"`;

        const edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
            'vscode.executeDocumentRenameProvider',
            editor.document.uri,
            position,
            newName
        );
        if (!edit) {
            return false;
        }
        return vscode.workspace.applyEdit(edit);
    });

    disposable = vscode.commands.registerCommand('symbol-case-renamer.renameToPascalCase', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const position = editor.selection.active;
        const wordRange = editor.document.getWordRangeAtPosition(position);
        const word = editor.document.getText(wordRange);

        const newName = toPascalCase(word);

        const edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
            'vscode.executeDocumentRenameProvider',
            editor.document.uri,
            position,
            newName
        );
        if (!edit) {
            return false;
        }
        return vscode.workspace.applyEdit(edit);
    });

    disposable = vscode.commands.registerCommand('symbol-case-renamer.renameToLowerCase', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const position = editor.selection.active;
        const wordRange = editor.document.getWordRangeAtPosition(position);
        const word = editor.document.getText(wordRange);

        const newName = toLowerCase(word);

        const edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
            'vscode.executeDocumentRenameProvider',
            editor.document.uri,
            position,
            newName
        );
        if (!edit) {
            return false;
        }
        return vscode.workspace.applyEdit(edit);
    });

    disposable = vscode.commands.registerCommand('symbol-case-renamer.renameToTitleCase', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const position = editor.selection.active;
        const wordRange = editor.document.getWordRangeAtPosition(position);
        const word = editor.document.getText(wordRange);

        const newName = toTitleCase(word);

        const edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
            'vscode.executeDocumentRenameProvider',
            editor.document.uri,
            position,
            newName
        );
        if (!edit) {
            return false;
        }
        return vscode.workspace.applyEdit(edit);
    });

    disposable = vscode.commands.registerCommand('symbol-case-renamer.renameToUpperCase', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const position = editor.selection.active;
        const wordRange = editor.document.getWordRangeAtPosition(position);
        const word = editor.document.getText(wordRange);

        const newName = toUpperCase(word);

        const edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
            'vscode.executeDocumentRenameProvider',
            editor.document.uri,
            position,
            newName
        );
        if (!edit) {
            return false;
        }
        return vscode.workspace.applyEdit(edit);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
