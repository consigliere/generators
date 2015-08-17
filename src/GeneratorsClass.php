<?php
/**
 * Created by consigliere on August 17th 2015, 11:20:48 am.
 */

namespace Consigliere\Generators;


class GeneratorsClass
{
    /**
     * Create a new Generators Instance
     */
    public function __construct()
    {
        // constructor body
    }

    /**
     * Friendly welcome
     *
     * @param string $phrase Phrase to return
     *
     * @return string Returns the phrase passed in
     */
    public function echoPhrase($phrase)
    {
        return $phrase;
    }
}