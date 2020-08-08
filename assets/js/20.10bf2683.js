(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{419:function(e,t,o){"use strict";o.r(t);var r=o(33),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ibm-z®-open-editor-releases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibm-z®-open-editor-releases"}},[e._v("#")]),e._v(" IBM Z® Open Editor Releases")]),e._v(" "),o("h2",{attrs:{id:"_1-0-3-2020-08-07"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-3-2020-08-07"}},[e._v("#")]),e._v(" 1.0.3 - 2020/08/07")]),e._v(" "),o("ul",[o("li",[e._v("Added support for specifying custom include file extensions. You can now use the Z Open Editor Preferences page to add and remove the file extensions to be used when searching for local include files such as COBOL copybooks. Also consistently added the Data Sets settings for remote inlcude files to the visual editor allowing users to remove the mappings they do not want mapped in the files.association setting ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/16",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 16"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("Added branch targets to the HLASM Outline view.")]),e._v(" "),o("li",[e._v('Fixed COBOL syntax highlighting using a "/" character for comments ('),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/60",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 60"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v('Fixed HLASM syntax highlighting for macros starrting with a "$" character ('),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/69",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 69"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("Added a support for using the "),o("code",[e._v("java.home")]),e._v(" user setting for developers that install VS Code with the "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/java/java-tutorial#_setting-up-visual-studio-code-for-java-development",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Installer of VS Code for Java developer"),o("OutboundLink")],1),e._v(" or the Java Extension Pack.")]),e._v(" "),o("li",[e._v("Added a Zowe Profile validation routine that is called when adding and using RSE API profiles with Zowe Explorer 1.7 or newer.")])]),e._v(" "),o("h2",{attrs:{id:"_1-0-2-2020-06-30"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-2-2020-06-30"}},[e._v("#")]),e._v(" 1.0.2 - 2020/06/30")]),e._v(" "),o("ul",[o("li",[e._v("Merged v0.5.2 with v1.0.1 to publish v1.0.2 to the VS Code Marketplace that now includes the language server for IBM High-Level Assembler (HLASM) for z/OS 2.4.")]),e._v(" "),o("li",[e._v("Reorganized the language server packaging to reduce the size of the extension to less than half than it was before.")])]),e._v(" "),o("h2",{attrs:{id:"_1-0-1-0-5-2-2020-06-23"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-1-0-5-2-2020-06-23"}},[e._v("#")]),e._v(" 1.0.1/0.5.2 - 2020/06/23")]),e._v(" "),o("ul",[o("li",[e._v("Fixed false positives in Java compatibility check that prevented newer Java SDK versions than 8 to be used. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/57",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 57"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("h2",{attrs:{id:"_1-0-0-2020-06-12"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-0-2020-06-12"}},[e._v("#")]),e._v(" 1.0.0 - 2020/06/12")]),e._v(" "),o("ul",[o("li",[e._v("This is our v1.0 release for which you will be able to purchase technical support from IBM.")]),e._v(" "),o("li",[e._v("Added a language server for IBM High-Level Assembler (HLASM) for z/OS 2.4.")]),e._v(" "),o("li",[e._v("Currently only available here, because of VS Code Marketplace size restrictions: "),o("a",{attrs:{href:"https://developer.ibm.com/mainframe/products/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.ibm.com/mainframe/products/downloads"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"_0-5-0-2020-06-12"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-5-0-2020-06-12"}},[e._v("#")]),e._v(" 0.5.0 - 2020/06/12")]),e._v(" "),o("ul",[o("li",[e._v("Added syntax error checking for COBOL Copybooks.")]),e._v(" "),o("li",[e._v("Added support for CICS 5.6 syntax.")]),e._v(" "),o("li",[e._v("Rewrote the algorithm for searching for remote include files using Zowe CLI profiles.")]),e._v(" "),o("li",[e._v("Added user settings for specifying which Zowe CLI profile to use for finding remote include files on MVS in case you use multiple z/OSMF or RSE API CLI profiles.")]),e._v(" "),o("li",[e._v("Added Logger to analyze issues. Switch it on in the IBM Z Open Editor VS Code Preferences under User Settings.")]),e._v(" "),o("li",[e._v("Fixed bug with Unreachable Code Detection in COBOL EXECL SQL statements and switched default of the "),o("code",[e._v('"zopeneditor.cobol.enableUnreachableCodeWarnings"')]),e._v(" Preferences setting back to true. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/18",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 18"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Updated LSP4J language servers to baseline v0.9.0 and VS Code language clients to v6.1.3.")]),e._v(" "),o("li",[e._v("Improved LSP startup times.")]),e._v(" "),o("li",[e._v("Added more Java runtime checks to ensure you are using a valid Java SDK with the Z Open Editor extension.")]),e._v(" "),o("li",[e._v("Various enhancements and fixes for RSE API support such as Get JCL from the Zowe Explorer JES view as well as Migrate/Recall from the Zowe Explorer MVS view.")]),e._v(" "),o("li",[e._v("Fixed rare race condition when starting language servers. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/45",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 45"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Various stability fixes and refinements.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-9-2020-04-23"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-9-2020-04-23"}},[e._v("#")]),e._v(" 0.4.9 - 2020/04/23")]),e._v(" "),o("ul",[o("li",[e._v("Fixed an issue when using RSE for the Zowe Explorer JES view.")]),e._v(" "),o("li",[e._v("Fixed errors messages users saw when creating z/OSMF profiles in Zowe Explorer when Zowe CLI and/or the IBM RSE API Plugin for Zowe CLI was not installed.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-7-2020-03-27"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-7-2020-03-27"}},[e._v("#")]),e._v(" 0.4.7 - 2020/03/27")]),e._v(" "),o("ul",[o("li",[e._v("Added Beta-level support for the new Remote System Explorer API (RSEAPI) REST servers that can be used as an alternative to z/OSMF for remote file operations as well as Zowe Explorer visual explorer views. If you run RSE already for IBM Developer for Z or IBM z/OS Explorer you can simply update. Go to "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ibm.github.io/zopeneditor-about"),o("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),o("li",[e._v("Reduced the memory consumption of the extension by starting language servers only if a program in a specifc language is opened for the first time. This will avoid that you are wasting valuable PC memory for languages that you do not use. In addition we added two optional commands that you can run to pause the COBOL or PL/I language server once you finished with one language and want to free up its memory. When you open a program of that language again the language server will restart.")]),e._v(" "),o("li",[e._v("Added code actions that provide suggestions for resolving COBOL copybooks and PL/I include files by linking to Online Help pages.")]),e._v(" "),o("li",[e._v("Removed MQ code templates for now as we ran into some language compatibility issues.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-5-2020-01-07"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-5-2020-01-07"}},[e._v("#")]),e._v(" 0.4.5 - 2020/01/07")]),e._v(" "),o("ul",[o("li",[e._v("Added an additional 27 code snippets for MQ development with COBOL and 27 for MQ with PL/I.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-3-2019-12-18"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-3-2019-12-18"}},[e._v("#")]),e._v(" 0.4.3 - 2019/12/18")]),e._v(" "),o("ul",[o("li",[e._v("Added more code snippets for COBOL, PL/I and JCL, which brings it to a total of 186. For COBOL we now provide 27 General COBOL language support snippets, 12 Embedded SQL snippets, 29 for CICS, 12 for IMS, and 8 for VSAM. Similarly, we provide for PL/I 12 General PL/I language support snippets, 29 CICS, 11 IMS, and 7 VSAM. Finally, we have 27 code snippets for JCL.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-1-2019-11-21"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-1-2019-11-21"}},[e._v("#")]),e._v(" 0.4.1 - 2019/11/21")]),e._v(" "),o("ul",[o("li",[e._v("Language Server updates to support IBM Enterprise COBOL v6.3 and PL/I v5.3.")]),e._v(" "),o("li",[e._v("Added all new sets of IBM field contributed code snippets for COBOL embedded SQL and CICS, PL/I embedded SQL, and various new JCL snippets. This is just the beginning of us curating a larger portfolio of high-value code snippets and incrementally releasing these in the coming months. Keep and eye out and "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("let us know what you think of these snippets"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Added an import command for loading Code Snippets exported by the IBM Developer from z/OS. Do you have your own set of code snippets that you managed in the Snippets view in IDz? You can now export and import these into Z Open Editor.")]),e._v(" "),o("li",[e._v("Switched off COBOL Unreachable Code warnings by default as there are cases in which it can provide false positives ("),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/knownissues.html#limitations-of-cobol-program-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("see here"),o("OutboundLink")],1),e._v(" for details). If you can accept the risk of a few false reports then you can enable it again by using the "),o("code",[e._v('"zopeneditor.cobol.enableUnreachableCodeWarnings": true')]),e._v(" VS Code user or workspace setting.")]),e._v(" "),o("li",[e._v("Fixed a code completion bug for COBOL and PL/I that would erase text to the right of the cursor.")]),e._v(" "),o("li",[e._v("Fixed cases in which COBOL statements before the IDENTIFICATION DIVISION would break syntax checking. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #9"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Fixed exceptions thrown by the PL/I LSP when computing document links ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/13",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #13"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Fixed issues with COBOL Unreachable Code warnings not being shown at all in some cases. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/7",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #7"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Fixed an issue in which invalid PIC clauses would not be reported as syntax errors.")])]),e._v(" "),o("h2",{attrs:{id:"_0-3-11-2019-09-27"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-11-2019-09-27"}},[e._v("#")]),e._v(" 0.3.11 - 2019/09/27")]),e._v(" "),o("ul",[o("li",[e._v('"Unreachable Code" is not reported as an error anymore, but is now a warning message in the Problems View.')]),e._v(" "),o("li",[e._v('Switch off "Unreachable Code" detection completely with this new setting: '),o("code",[e._v('"zopeneditor.cobol.enableUnreachableCodeWarnings": false')]),e._v(".")]),e._v(" "),o("li",[e._v("We implemented GLOB pattern matching in Property Group settings for finding Copybooks on the local file system as requested in "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/5",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),o("OutboundLink")],1),e._v(". Use with care as a very large search space will slow down the editor.")]),e._v(" "),o("li",[e._v("We added support for "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code Multi-root Workspaces"),o("OutboundLink")],1),e._v(" allowing you to now specify Property Groups for finding Copybooks for a workspace comprising of many development project folders and Git repositories. To use it move your Property Groups to the Workspace File.")]),e._v(" "),o("li",[e._v("We updated and revised our documentation for using Property Groups with patterns and workspaces in the "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/setting_propertygroup.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Online Help"),o("OutboundLink")],1),e._v(". We also added examples for using it on Windows versus Mac/Linux.")]),e._v(" "),o("li",[e._v("Fixed an issue with using the Tab key in Code Snippets and when using it for indentation in the editor.")])]),e._v(" "),o("h2",{attrs:{id:"_0-3-9-2019-09-23"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-9-2019-09-23"}},[e._v("#")]),e._v(" 0.3.9 - 2019/09/23")]),e._v(" "),o("ul",[o("li",[e._v("Just removed Preview flag in preparation for the announcement.")]),e._v(" "),o("li",[e._v("Stay tuned for more cool things to come.")])]),e._v(" "),o("h2",{attrs:{id:"_0-3-7-2019-09-17"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-7-2019-09-17"}},[e._v("#")]),e._v(" 0.3.7 - 2019/09/17")]),e._v(" "),o("ul",[o("li",[e._v("Fixes to the documentation and hyperlinks.")]),e._v(" "),o("li",[e._v("Renamed extension preferences configuration name.")])]),e._v(" "),o("h2",{attrs:{id:"_0-3-5-2019-09-13"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-5-2019-09-13"}},[e._v("#")]),e._v(" 0.3.5 - 2019/09/13")]),e._v(" "),o("ul",[o("li",[e._v("First public release evolving out of the Wazi technology preview. See README.md for details.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);