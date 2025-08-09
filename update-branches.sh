#!/bin/bash

# Script to update all branches with changes from the current branch
# Usage: ./update-branches.sh "Commit message"

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Please provide a commit message"
  echo "Usage: ./update-branches.sh \"Commit message\""
  exit 1
fi

# Get the current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Commit changes to the current branch
git add .
git commit -m "$1"
git push origin $CURRENT_BRANCH
echo "Changes committed and pushed to $CURRENT_BRANCH"

# Function to update a branch
update_branch() {
  local TARGET_BRANCH=$1
  echo "Updating $TARGET_BRANCH branch..."
  git checkout $TARGET_BRANCH
  
  # If we're coming from simplified-version branch, copy the simplified files
  if [ "$CURRENT_BRANCH" = "simplified-version" ]; then
    # Copy simplified files to their respective locations
    cp fda-guidance.html FDA_Guidance_Evolution_Epinephrine_Autoinjectors_fixed.html
    cp index.html index.html
    cp styles.css styles.css
  fi
  
  # If we're coming from main branch, copy the original files
  if [ "$CURRENT_BRANCH" = "main" ]; then
    # Copy original files to their respective locations
    cp FDA_Guidance_Evolution_Epinephrine_Autoinjectors_fixed.html fda-guidance.html
  fi
  
  # Commit and push changes
  git add .
  git commit -m "$1 (synced from $CURRENT_BRANCH)"
  git push origin $TARGET_BRANCH
  echo "$TARGET_BRANCH updated successfully"
}

# Update other branches
if [ "$CURRENT_BRANCH" != "main" ]; then
  update_branch "main"
fi

if [ "$CURRENT_BRANCH" != "landing-page" ]; then
  update_branch "landing-page"
fi

if [ "$CURRENT_BRANCH" != "simplified-version" ]; then
  update_branch "simplified-version"
fi

# Return to the original branch
git checkout $CURRENT_BRANCH
echo "Returned to $CURRENT_BRANCH"
echo "All branches updated successfully!"