(async function() {
  const blockedIPs = ["192.168.1.100", "203.0.113.45"]; // IPs bloqueadas

  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    const userIP = data.ip;

    if (!blockedIPs.includes(userIP)) {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5163385221124664";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    } else {
      console.log("Publicidad bloqueada para esta IP:", userIP);
    }
  } catch (error) {
    console.error("Error al obtener la IP:", error);
  }
})();
