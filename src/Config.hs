module Config
    ( siteRoot
    , templateDir
    , blogsDir
    , tabPaths
    , hakyllConfig
    ) where

import Hakyll (Configuration (..), defaultConfiguration)

-- TODO: Set this to your deployed site URL
siteRoot :: String
siteRoot = "https://example.com"

templateDir :: FilePath
templateDir = "src/templates/"

blogsDir :: FilePath
blogsDir = "src/blogs"

-- List all tab pages here. home.md and blog.md have special routing (see below).
-- Add or remove tab files as needed.
tabPaths :: [FilePath]
tabPaths =
    [ "src/tabs/home.md"
    , "src/tabs/tab1.md"
    , "src/tabs/tab2.md"
    , "src/tabs/blog.md"
    , "src/tabs/tab3.md"
    ]

hakyllConfig :: Configuration
hakyllConfig = defaultConfiguration
    { destinationDirectory = "docs"
    }
