#!/bin/bash

# Script to attach a file to a Jira issue
# Usage: ./attach_to_jira.sh SCRUM-1 /path/to/image.png

ISSUE_KEY="$1"
FILE_PATH="$2"
FILE_NAME=$(basename "$FILE_PATH")

# Hard-code Jira credentials from mcp.json

echo "Uploading $FILE_PATH to Jira issue $ISSUE_KEY"
curl -D- \
  -u "$JIRA_USERNAME:$JIRA_API_TOKEN" \
  -X POST \
  -H "X-Atlassian-Token: no-check" \
  -F "file=@$FILE_PATH" \
  "$JIRA_URL/rest/api/2/issue/$ISSUE_KEY/attachments"

echo -e "\nAttachment process completed"
