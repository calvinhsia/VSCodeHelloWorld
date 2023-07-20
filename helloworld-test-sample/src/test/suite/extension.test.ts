import * as assert from 'assert';
import * as Mocha from 'mocha';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';
const suite = Mocha.describe;
const test = Mocha.it;

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', async () => {
		vscode.commands.executeCommand("extension.helloWorld");
		assert.strictEqual([1, 2, 3].indexOf(5), -1);
		assert.strictEqual([1, 2, 3].indexOf(0), -1);
        await new Promise(resolve => setTimeout(resolve, 5000));
	});
});

