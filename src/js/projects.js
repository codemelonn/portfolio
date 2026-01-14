// =====================================================
// MELON OS PROJECTS WINDOW LOGIC
// =====================================================

document.addEventListener("click", (e) => {
  const tile = e.target.closest(".folder-tile");
  if (!tile) return;

  document.querySelectorAll(".folder-tile.is-selected")
    .forEach(el => el.classList.remove("is-selected"));

  tile.classList.add("is-selected");
});

  