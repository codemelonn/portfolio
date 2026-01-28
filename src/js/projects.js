// =====================================================
// MELON OS PROJECTS WINDOW LOGIC (INIT ON DEMAND)
// =====================================================

// Map folder keys to template ids
const TEMPLATE_IDS = {
    webandsoft: "tpl-webandsoft",
    database: "tpl-database",
    cybersec: "tpl-cybersec",
    systems: "tpl-systems",
    techknowledge: "tpl-techknowledge",
    games: "tpl-games",
};

// One listener for the whole site.
// It only does anything when the click happened inside a window-body that currently holds the Projects page.
document.addEventListener("click", (e) => {
    const body = e.target.closest(".window-body");
    if (!body) return;

    // Only handle clicks if this window-body currently contains the Projects HTML
    if (body.dataset.loadedPage !== "projects") return;

    const explorerContent = body.querySelector("#explorerContent");
    if (!explorerContent) return;

    // -----------------------------------------------------
    // 2) Folder click -> swap explorerContent to template
    // -----------------------------------------------------
    const folderEl = e.target.closest("[data-folder]");
    if (folderEl) {
        const key = folderEl.getAttribute("data-folder");
        const tplId = TEMPLATE_IDS[key];
        const tpl = tplId ? body.querySelector(`#${tplId}`) : null;
        if (!tpl) return;

        const viewFolders = body.querySelector("#view-folders");
        const viewFolder = body.querySelector("#view-folder");
        const folderMount = body.querySelector("#folderMount");
        if (!viewFolders || !viewFolder || !folderMount) return;

        // mount template content
        folderMount.innerHTML = "";
        folderMount.appendChild(tpl.content.cloneNode(true));

        // toggle views
        viewFolders.classList.add("hidden");
        viewFolder.classList.remove("hidden");

        // breadcrumb update
        const folderChevron = body.querySelector("#folderChevron");
        const folderCrumb = body.querySelector("#folderCrumb");
        if (folderChevron && folderCrumb) {
            folderChevron.classList.remove("hidden");
            folderCrumb.classList.remove("hidden");

            const labels = {
                webandsoft: "Web Development",
                database: "Database",
                cybersec: "Cybersecurity",
                systems: "Digital Forensics",
                techknowledge: "Software Development",
                games: "Games",
            };
            folderCrumb.textContent = labels[key] ?? key;
        }

        return;
    }

    // -----------------------------------------------------
    // 3) Back click -> restore the cached folder grid DOM
    // -----------------------------------------------------
    const backBtn = e.target.closest('[data-action="back"]');
    if (backBtn) {
        const viewFolders = body.querySelector("#view-folders");
        const viewFolder = body.querySelector("#view-folder");
        const folderMount = body.querySelector("#folderMount");
        if (!viewFolders || !viewFolder || !folderMount) return;

        // clear folder view content (optional but keeps DOM clean)
        folderMount.innerHTML = "";

        // toggle views
        viewFolder.classList.add("hidden");
        viewFolders.classList.remove("hidden");

        // breadcrumb reset
        const folderChevron = body.querySelector("#folderChevron");
        const folderCrumb = body.querySelector("#folderCrumb");
        if (folderChevron && folderCrumb) {
            folderChevron.classList.add("hidden");
            folderCrumb.classList.add("hidden");
            folderCrumb.textContent = "";
        }
    }
});
