#!/bin/bash
# Generate RSS feed for C25 build updates

FEED_FILE="$HOME/.c25_rss/c25-builds.xml"
FEED_URL="https://c25.kre8tivekonceptz.com/builds.xml"

# Create RSS header
cat > "$FEED_FILE" << RSSHEAD
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>C25 Ultimate 2026 - Build Updates</title>
    <link>$FEED_URL</link>
    <description>Automated build updates from C25 Planetary Agents</description>
    <language>en-us</language>
    <lastBuildDate>$(date -R)</lastBuildDate>
    <atom:link href="$FEED_URL" rel="self" type="application/rss+xml"/>
RSSHEAD

# Add recent builds from history
grep -E "c25|build|deploy|orchestrator" ~/.bash_history 2>/dev/null | \
  tail -20 | \
  tac | \
  while IFS= read -r cmd; do
    timestamp=$(date -R)
    title=$(echo "$cmd" | cut -c1-80)
    echo "    <item>
      <title>Build: $title</title>
      <link>$FEED_URL</link>
      <description>Command executed: $cmd</description>
      <pubDate>$timestamp</pubDate>
      <guid>$(echo "$cmd" | md5sum | cut -d' ' -f1)</guid>
    </item>" >> "$FEED_FILE"
  done

# Close RSS
echo "  </channel>
</rss>" >> "$FEED_FILE"

echo "✅ RSS feed generated: $FEED_FILE"
echo "   Subscribe: $FEED_URL"
