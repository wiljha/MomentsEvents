const params = new URLSearchParams(self.location.search)
importScripts('https://webpush.infobip.com/infobip-service-worker-latest.js?version=' + params.get("version") + "&appCode=" + params.get("appCode"))
