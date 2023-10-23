//<script src="https://alexidians.github.io/Super-Diamond-Avatar/avatar-api.js"></script>
const AvatarAPI = {
 getAvatarUrl: function() {
  return AvatarAPI.UrlAPI.contentWindow.postMessage("Website Request Using avatar-api.js", "*");
 },
 getAvatarBlob: function() {
  return AvatarAPI.BlobAPI.contentWindow.postMessage("Website Request Using avatar-api.js", "*");
 },
 getAvatarType: function() {
  return AvatarAPI.TypeAPI.contentWindow.postMessage("Website Request Using avatar-api.js", "*");
 },
 getAvatarExtension: function() {
  return AvatarAPI.ExtensionAPI.contentWindow.postMessage("Website Request Using avatar-api.js", "*");
 }
}

AvatarAPI.UrlAPI = document.createElement("iframe")
AvatarAPI.UrlAPI.src = "https://alexidians.github.io/Super-Diamond-Avatar/api/avatarUrl.html"
document.body.appendChild(AvatarAPI.UrlAPI)
AvatarAPI.BlobAPI = document.createElement("iframe")
AvatarAPI.BlobAPI.src = "https://alexidians.github.io/Super-Diamond-Avatar/api/avatarBlob.html"
document.body.appendChild(AvatarAPI.BlobAPI)
AvatarAPI.TypeAPI = document.createElement("iframe")
AvatarAPI.TypeAPI.src = "https://alexidians.github.io/Super-Diamond-Avatar/api/avatarType.html"
document.body.appendChild(AvatarAPI.TypeAPI)
AvatarAPI.ExtensionAPI = document.createElement("iframe")
AvatarAPI.ExtensionAPI.src = "https://alexidians.github.io/Super-Diamond-Avatar/api/avatarExtension.html"
document.body.appendChild(AvatarAPI.ExtensionAPI)
