const _ = (key, or = undefined, transform = _ => _) => transform(process.env[key] || or);

export const ServerConfig = {
    PORT: _("PORT", 3000),
}
