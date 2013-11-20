#
# Cookbook Name:: bravi-employees
# Recipe:: default
#
# Copyright (C) 2013 YOUR_NAME
#
# All rights reserved - Do Not Redistribute
#

include_recipe "git"
include_recipe "nodejs::default"
include_recipe "mongodb::10gen_repo"
include_recipe "mongodb::default"
