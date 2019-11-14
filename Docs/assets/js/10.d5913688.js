(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{218:function(e,o,t){"use strict";t.r(o);var n=t(0),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("IBM Z® Open Editor is an extension for Visual Studio Code that provides language support for the IBM® Enterprise COBOL 6.2 and PL/I 5.2 programming languages for z/OS®. This also includes capabilities for embedded statements for CICS 5.5, IMS 15.1.0 and SQL DB2 for z/OS 12.1. Earlier versions of any of these components will also work.")]),e._v(" "),t("p",[e._v("The extension realizes its language support by implementing fully functional "),t("a",{attrs:{href:"https://langserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("language servers"),t("OutboundLink")],1),e._v(" together with additional editor enhancements that enable mainframe developers to utilize features such as:")]),e._v(" "),t("ul",[t("li",[e._v("Real-time syntax checking and highlighting while you type")]),e._v(" "),t("li",[e._v("Problems view with all syntax errors and (in COBOL) unreachable code")]),e._v(" "),t("li",[e._v("Outline view and outline search")]),e._v(" "),t("li",[e._v("For both variables and paragraphs:\n"),t("ul",[t("li",[e._v("Declaration hovers")]),e._v(" "),t("li",[e._v("Peek definition")]),e._v(" "),t("li",[e._v("Go to definition")]),e._v(" "),t("li",[e._v("Find all references")])])]),e._v(" "),t("li",[e._v("Code and variable completion")]),e._v(" "),t("li",[e._v("Code template snippets")]),e._v(" "),t("li",[e._v("Finding and navigating references")]),e._v(" "),t("li",[e._v("Previewing of included copybooks and include files")]),e._v(" "),t("li",[e._v("Navigate to copybooks and include files")]),e._v(" "),t("li",[e._v('Refactoring such as "rename symbol"')]),e._v(" "),t("li",[e._v("Search and replace refactoring across multiple program files")])]),e._v(" "),t("p",[e._v("For a list of the enabled LSP features and in-progress features, see "),t("router-link",{attrs:{to:"/Docs/knownissues.html"}},[e._v("Known issues and limitations")]),e._v(".")],1),e._v(" "),t("p",[e._v("For the Job Control Language (JCL), the extension provides simple syntax highlighting.")]),e._v(" "),t("h2",{attrs:{id:"key-capabilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-capabilities","aria-hidden":"true"}},[e._v("#")]),e._v(" Key Capabilities")]),e._v(" "),t("p",[e._v("These are the key features and benefits of IBM Z Open Editor:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Modern editing experience for COBOL and PL/I development")]),e._v(" "),t("p",[e._v("IBM Z Open Editor is available as an extension for Visual Studio Code (VS Code), which is becoming the most popular development environment according to recent surveys. With so many current and next generation developers having experience with VS Code, IBM Enterprise language support in VS Code makes enterprise programming more attractive and productive by allowing developers to use this popular editor, with the option to integrate numerous other extensions from the VS Code Marketplace.")])]),e._v(" "),t("li",[t("p",[e._v("Full language support via the Language Server Protocol (LSP)")]),e._v(" "),t("p",[e._v("The extension supports many COBOL and PL/I capabilities that were not available in traditional editing environments such as "),t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/zosbasics/com.ibm.zos.zconcepts/zconcepts_138.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISPF"),t("OutboundLink")],1),e._v(", by providing "),t("a",{attrs:{href:"https://langserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Language Server Protocol"),t("OutboundLink")],1),e._v(" implementations. See above for the list of key features. Although supported by many other editors now, the Language Server Protocol was specifically created for VS Code and therefore is a good way for providing language support in the editor.")])]),e._v(" "),t("li",[t("p",[e._v("Extended language server capabilities for more productivity")]),e._v(" "),t("p",[e._v("In addition to the capabilities specified in the Language Server Protocol, the implementation is extended with more capabilities that are useful to enterprise developers. For example, you can use hovers for COBOL "),t("code",[e._v("COPY")]),e._v(" and PL/I "),t("code",[e._v("%INCLUDE")]),e._v(" statements to preview the contents of the copybooks without opening in separate editor tabs and navigating away from your current editing position.")])]),e._v(" "),t("li",[t("p",[e._v("Integration with modern Software Configuration Management (SCM)")]),e._v(" "),t("p",[e._v("Even if your organization does not standardize on an SCM, using the Git that is integrated in VS Code or popular extensions such as "),t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitLens"),t("OutboundLink")],1),e._v(' locally in a workspace will boost your productivity. You can work on COBOL and PL/I programs on your local workspace and snapshot work at any point, go back or branch into alternative explorations, merge your or your colleagues\' branches back in, or revert to any earlier state of your code in a flash. Use side-by-side views and "blame" annotations to explore the changes between snapshots, how they looked before, and the time of changes. See exactly for each line when it was last changed and by whom. Explore the entire history of all changes for a specific file or all files in your workspace in a chronological history viewer.')])]),e._v(" "),t("li",[t("p",[e._v("z/OS interactions using the open source Zowe clients")]),e._v(" "),t("p",[e._v("If you have z/OSMF configured, you can use "),t("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html#displaying-zowe-cli-help",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe CLI"),t("OutboundLink")],1),e._v(" and the "),t("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-vscodeplugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe VS Code Extension"),t("OutboundLink")],1),e._v(" to load and edit your files directly from z/OS or download them into your local workspace, add them to Git to control your changes, and then upload the changed files into the same or new data sets to compile and run your application. You can do all of these operations from IBM Z Open Editor directly with right-clicks and dialog interactions, and command-line operations using the VS Code Terminal view that integrates right below your editor, giving you one central view to everything.")]),e._v(" "),t("p",[e._v("After configuration, IBM Z Open Editor can also take advantage of the Zowe CLI protocol for resolving dependencies over the network. For example, you can edit your COBOL programs locally, but resolve copybook dependencies directly out of MVS™ using the same Zowe connections.")])])])])}),[],!1,null,null,null);o.default=a.exports}}]);