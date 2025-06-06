 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/main.js
index 0000000000000000000000000000000000000000..937d264beb6af1ec8e4d38dbb7e17b742698e3b8 100644
--- a//dev/null
+++ b/main.js
@@ -0,0 +1,19 @@
+// Navegación simple entre secciones
+const links = document.querySelectorAll('#main-nav a');
+const sections = document.querySelectorAll('main section');
+
+links.forEach(link => {
+    link.addEventListener('click', (e) => {
+        e.preventDefault();
+        const target = e.target.getAttribute('data-section');
+        sections.forEach(sec => {
+            if (sec.id === target) {
+                sec.classList.remove('hidden');
+                sec.classList.add('active');
+            } else {
+                sec.classList.add('hidden');
+                sec.classList.remove('active');
+            }
+        });
+    });
+});
 
EOF
)
