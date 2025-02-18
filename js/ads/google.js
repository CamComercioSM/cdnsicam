(async function() {
  const blockedIPs = [
    "190.90.87.90", "181.235.102.61", "161.10.111.153",
    "161.10.117.12", "161.10.99.237", "186.98.250.154",
    "186.98.243.149", "186.116.16.63", "186.98.237.215"
  ]; // Lista de IPs bloqueadas

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
