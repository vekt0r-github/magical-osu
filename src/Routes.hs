{-# LANGUAGE OverloadedStrings #-}
module Routes
    ( titleRoute
    ) where

import           Data.Maybe      (fromMaybe)
import qualified Data.Text       as T
import           Hakyll          (Metadata, Routes, constRoute, lookupString)
import           Slug             (toSlug)

titleRoute :: FilePath -> Metadata -> Routes
titleRoute parent = constRoute . fileNameFromTitle parent

fileNameFromTitle :: FilePath -> Metadata -> FilePath
fileNameFromTitle parent =
    (parent ++) . T.unpack . (`T.append` ".html") . toSlug . T.pack . getTitleFromMeta

getTitleFromMeta :: Metadata -> String
getTitleFromMeta = fromMaybe "no title" . lookupString "title"
